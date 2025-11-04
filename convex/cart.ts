import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

// Get cart by session ID or user ID
export const getCart = query({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Try to find by userId first (authenticated user)
    if (args.userId) {
      const cart = await ctx.db
        .query("carts")
        .withIndex("by_userId", (q) => q.eq("userId", args.userId))
        .first();

      if (cart) return cart;
    }

    // Fall back to sessionId (guest user)
    const cart = await ctx.db
      .query("carts")
      .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
      .first();

    return cart;
  },
});

// Add item to cart
export const addToCart = mutation({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.string()),
    item: v.object({
      productId: v.string(),
      name: v.string(),
      price: v.number(),
      quantity: v.number(),
      image: v.string(),
      slug: v.optional(v.string()),
    }),
  },
  handler: async (ctx, args) => {
    const now = Date.now();

    // Find existing cart
    let cart;
    if (args.userId) {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_userId", (q) => q.eq("userId", args.userId))
        .first();
    } else {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
        .first();
    }

    if (cart) {
      // Update existing cart
      const existingItemIndex = cart.items.findIndex(
        (item) => item.productId === args.item.productId
      );

      let updatedItems;
      if (existingItemIndex >= 0) {
        // Update quantity of existing item
        updatedItems = cart.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + args.item.quantity }
            : item
        );
      } else {
        // Add new item
        updatedItems = [...cart.items, args.item];
      }

      await ctx.db.patch(cart._id, {
        items: updatedItems,
        updatedAt: now,
      });

      return cart._id;
    } else {
      // Create new cart
      const cartId = await ctx.db.insert("carts", {
        sessionId: args.sessionId,
        userId: args.userId,
        items: [args.item],
        createdAt: now,
        updatedAt: now,
      });

      return cartId;
    }
  },
});

// Update item quantity in cart
export const updateCartItemQuantity = mutation({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.string()),
    productId: v.string(),
    quantity: v.number(),
  },
  handler: async (ctx, args) => {
    // Find cart
    let cart;
    if (args.userId) {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_userId", (q) => q.eq("userId", args.userId))
        .first();
    } else {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
        .first();
    }

    if (!cart) {
      throw new Error("Cart not found");
    }

    // Update or remove item
    let updatedItems;
    if (args.quantity <= 0) {
      // Remove item
      updatedItems = cart.items.filter(
        (item) => item.productId !== args.productId
      );
    } else {
      // Update quantity
      updatedItems = cart.items.map((item) =>
        item.productId === args.productId
          ? { ...item, quantity: args.quantity }
          : item
      );
    }

    await ctx.db.patch(cart._id, {
      items: updatedItems,
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});

// Remove item from cart
export const removeFromCart = mutation({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.string()),
    productId: v.string(),
  },
  handler: async (ctx, args) => {
    // Find cart
    let cart;
    if (args.userId) {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_userId", (q) => q.eq("userId", args.userId))
        .first();
    } else {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
        .first();
    }

    if (!cart) {
      throw new Error("Cart not found");
    }

    const updatedItems = cart.items.filter(
      (item) => item.productId !== args.productId
    );

    await ctx.db.patch(cart._id, {
      items: updatedItems,
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});

// Clear entire cart
export const clearCart = mutation({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Find cart
    let cart;
    if (args.userId) {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_userId", (q) => q.eq("userId", args.userId))
        .first();
    } else {
      cart = await ctx.db
        .query("carts")
        .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
        .first();
    }

    if (!cart) {
      return { success: true }; // Cart already empty
    }

    await ctx.db.patch(cart._id, {
      items: [],
      updatedAt: Date.now(),
    });

    return { success: true };
  },
});

// Merge guest cart with user cart after login
export const mergeGuestCart = mutation({
  args: {
    sessionId: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    // Find guest cart
    const guestCart = await ctx.db
      .query("carts")
      .withIndex("by_sessionId", (q) => q.eq("sessionId", args.sessionId))
      .first();

    if (!guestCart || guestCart.items.length === 0) {
      return { success: true }; // No guest cart to merge
    }

    // Find or create user cart
    let userCart = await ctx.db
      .query("carts")
      .withIndex("by_userId", (q) => q.eq("userId", args.userId))
      .first();

    const now = Date.now();

    if (userCart) {
      // Merge items
      const mergedItems = [...userCart.items];

      guestCart.items.forEach((guestItem) => {
        const existingIndex = mergedItems.findIndex(
          (item) => item.productId === guestItem.productId
        );

        if (existingIndex >= 0) {
          // Combine quantities
          mergedItems[existingIndex].quantity += guestItem.quantity;
        } else {
          // Add new item
          mergedItems.push(guestItem);
        }
      });

      await ctx.db.patch(userCart._id, {
        items: mergedItems,
        updatedAt: now,
      });
    } else {
      // Create user cart with guest items
      await ctx.db.insert("carts", {
        userId: args.userId,
        sessionId: args.sessionId,
        items: guestCart.items,
        createdAt: now,
        updatedAt: now,
      });
    }

    // Clear guest cart
    await ctx.db.delete(guestCart._id);

    return { success: true };
  },
});
