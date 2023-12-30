import { mutation, query } from "./_generated/server"
import { v } from "convex/values"

export const listPosts = query({
  handler: async (ctx) => {
    const posts = await ctx.db.query("posts").collect()
    return posts
  },
})

export const getPost = query({
  args: { id: v.id("posts") },
  handler: async (ctx, args) => {
    const post = await ctx.db.get(args.id)
    return post
  },
})

export const createPost = mutation({
  args: {
    title: v.string(),
    author: v.string(),
    category: v.string(),
    text: v.string(),
    date: v.string(),
    likes: v.number(),
    dislikes: v.number(),
    comments: v.number(),
  },
  handler: async (ctx, args) => {
    const postId = await ctx.db.insert("posts", {
      title: args.title,
      author: args.author,
      category: args.category,
      text: args.text,
      date: args.date,
      likes: args.likes,
      dislikes: args.dislikes,
      comments: args.comments,
    })
  },
})
