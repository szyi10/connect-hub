import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const listComments = query({
  args: {
    postID: v.id("posts"),
  },
  handler: async (ctx, args) => {
    const comments = await ctx.db
      .query("comments")
      .filter((q) => q.eq(q.field("postID"), args.postID))
      .collect()

    return comments
  },
})

export const createComment = mutation({
  args: {
    comment: v.string(),
    userID: v.string(),
    postID: v.id("posts"),
  },
  handler: async (ctx, args) => {
    const commentID = await ctx.db.insert("comments", {
      comment: args.comment,
      userID: args.userID,
      postID: args.postID,
    })
  },
})
