import { Link, useParams } from "react-router-dom"

import { useQuery } from "convex/react"

import { api } from "../../../convex/_generated/api"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu"
import {
  MoreVertical,
  ThumbsUp,
  ThumbsDown,
  AlertTriangle,
  Share,
} from "lucide-react"
import { Spinner } from "../ui/spinner"

const SelectedPost = () => {
  const { postId } = useParams()
  const post = useQuery(api.posts.getPost, { id: postId })

  if (!post) {
    return <Spinner />
  }

  return (
    <section className="mt-28">
      <div className="w-full flex items-center justify-between">
        <Link to="#" className="flex items-center gap-1">
          <Avatar className="w-5 h-5">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              {post.author.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm tracking-tight text-muted-foreground">
            {post.author} posted:
          </p>
        </Link>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <div className="text-muted-foreground ">
              <MoreVertical className="w-5 h-5" />
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-36">
            <DropdownMenuItem>
              <Share className="mr-2 h-4 w-4" />
              <span>Share</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <AlertTriangle className="mr-2 h-4 w-4" />
              <span>Report</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-3">
        {post.title}
      </h1>
      <h4 className="text-lg font-medium tracking-wider text-neutral-400 lg:text-xl mt-2">
        {post.category.toUpperCase()}
      </h4>
      <p className="leading-7 [&:not(:first-child)]:mt-6">{post.text}</p>
      {post.image && (
        <img src={post.image} alt="Post Image" className="rounded-2xl mt-2" />
      )}

      <p className="text-xs text-neutral-400 mt-3">{post.date}</p>

      <div className="flex items-center gap-6 mt-4">
        <button className="flex items-center gap-1 group/like">
          <ThumbsUp className="text-muted-foreground w-5 h-5 group-hover/like:text-green-500 transition-colors" />
          <small className="text-sm font-medium text-muted-foreground">
            {post.likes}
          </small>
        </button>
        <button className="flex items-center gap-1 group/dislike">
          <ThumbsDown className="text-muted-foreground w-5 h-5 group-hover/dislike:text-red-600 transition-colors" />
          <small className="text-sm font-medium text-muted-foreground">
            {post.dislikes}
          </small>
        </button>
      </div>
    </section>
  )
}

export default SelectedPost
