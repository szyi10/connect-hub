import { Link } from "react-router-dom"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { MessageCircle, ThumbsDown, ThumbsUp } from "lucide-react"

const Post = ({ data }) => {
  return (
    <Link
      to={`/post/${data._id}`}
      className="[&:not(:last-child)]:border-b [&:first-child]:mt-4 pt-4 pb-6 hover:bg-muted sm:px-2 transition-colors"
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Avatar className="w-4 h-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              {data.author.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <p className="text-sm tracking-tight text-muted-foreground">
            {data.author}:
          </p>
        </div>
      </div>
      <h1 className="text-2xl font-extrabold tracking-tight lg:text-3xl mt-1">
        {data.title}
      </h1>
      <h4 className="font-medium tracking-wider text-neutral-400 lg:text-lg">
        {data.category.toUpperCase()}
      </h4>
      <p className="leading-7 mt-2 line-clamp-6">{data.text}</p>
      <p className="text-xs text-neutral-400 mt-1">{data.date}</p>

      <div className="flex items-center gap-6 mt-4">
        <button className="flex items-center gap-1 group/like">
          <ThumbsUp className="text-muted-foreground w-4 h-4 group-hover/like:text-green-500 transition-colors" />
          <small className="text-sm font-medium text-muted-foreground">
            {data.likes}
          </small>
        </button>
        <button className="flex items-center gap-1 group/dislike">
          <ThumbsDown className="text-muted-foreground w-4 h-4 group-hover/dislike:text-red-600 transition-colors" />
          <small className="text-sm font-medium text-muted-foreground">
            {data.dislikes}
          </small>
        </button>
        <button className="flex items-center gap-1 group/comment">
          <MessageCircle className="text-muted-foreground w-4 h-4 group-hover/comment:text-sky-600 transition-colors" />
          <small className="text-sm font-medium text-muted-foreground">
            {data.comments}
          </small>
        </button>
      </div>
    </Link>
  )
}

export default Post
