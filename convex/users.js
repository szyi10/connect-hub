import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const getUserByDocumentId = query({
  args: { id: v.id("users") },
  handler: async (ctx, args) => {
    const user = await ctx.db.get(args.id)
    return user
  },
})

export const getUser = query({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("id"), args.id))
      .collect()
    return user
  },
})

export const storeUser = mutation({
  args: {
    id: v.string(),
    username: v.optional(v.string()),
    firstName: v.optional(v.string()),
    imageURL: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const userIdentity = args.id
    if (!userIdentity) {
      throw new Error("Called storeUser without id present")
    }

    // Check if user is already stored
    const user = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("id"), args.id))
      .collect()
    if (user.length !== 0) {
      // Check if user changed username
      if (user[0].username !== args.username) {
        await ctx.db.patch(user[0]._id, { username: args.username })
      }

      // Check if user changed avatar
      if (user[0].imageURL !== args.imageURL) {
        await ctx.db.patch(user[0]._id, { imageURL: args.imageURL })
      }

      return user
    }

    // Create new user
    return await ctx.db.insert("users", {
      id: args.id,
      username: args.username,
      firstName: args.firstName,
      hasImage: args.hasImage,
      imageURL: args.imageURL,
      updatedAt: args.updatedAt,
    })
  },
})
