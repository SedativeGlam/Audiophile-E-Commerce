// convex/orders.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const create = mutation({
  args: {
    sessionId: v.string(),
    userId: v.optional(v.string()),
    customer: v.object({
      name: v.string(),
      email: v.string(),
      phone: v.string(),
    }),
    shipping: v.object({
      address: v.string(),
      zip: v.string(),
      city: v.string(),
      country: v.string(),
    }),
    items: v.array(
      v.object({
        productId: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.string(),
        slug: v.optional(v.string()),
      })
    ),
    totals: v.object({
      subtotal: v.number(),
      shipping: v.number(),
      taxes: v.number(),
      grandTotal: v.number(),
    }),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const order = {
      sessionId: args.sessionId,
      userId: args.userId,
      customer: args.customer,
      shipping: args.shipping,
      items: args.items,
      totals: args.totals,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };

    const id = await ctx.db.insert("orders", order);
    return id; // Convex record _id
  },
});

// Fetch order (server-side query; useful for Order page if you want)
export const getById = query({
  args: { orderId: v.string() },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orders")
      .filter((q) => q.eq(q.field("_id"), args.orderId))
      .collect();
    return order;
  },
});
