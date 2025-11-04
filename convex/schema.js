// import { defineSchema, defineTable } from "convex/server";
// import { v } from "convex/values";

// export default defineSchema({
//   cart: defineTable({
//     userId: v.optional(v.string()), // optional for guest carts
//     items: v.array(
//       v.object({
//         id: v.string(),
//         name: v.string(),
//         price: v.number(),
//         quantity: v.number(),
//         image: v.string(),
//       })
//     ),
//     createdAt: v.number(),
//   }),
//   orders: defineTable({
//     name: v.string(),
//     email: v.string(),
//     phone: v.string(),
//     address: v.string(),
//     items: v.array(
//       v.object({
//         id: v.string(),
//         name: v.string(),
//         price: v.number(),
//         quantity: v.number(),
//       })
//     ),
//     total: v.number(),
//     createdAt: v.number(),
//   }),
// });

import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // ... existing orders table ...

  // Add cart table
  carts: defineTable({
    userId: v.optional(v.string()), // For authenticated users
    sessionId: v.string(), // For guest users
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
    updatedAt: v.number(),
    createdAt: v.number(),
  })
    .index("by_userId", ["userId"])
    .index("by_sessionId", ["sessionId"])
    .index("by_updatedAt", ["updatedAt"]),

  // Existing orders table
  orders: defineTable({
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
  }),
});
