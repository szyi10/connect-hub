import { Link } from "react-router-dom"

import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Spinner } from "../ui/spinner"

const Comment = ({ data }) => {
  // Detect mention in comment
  const highlightMentions = () => {
    return data.comment.replace(
      /@(\w+)/g,
      '<span class="text-primary font-medium">@$1</span>'
    )
  }

  const user = useQuery(api.users.getUserByDocumentId, { id: data.userID })

  if (!user) {
    return <Spinner />
  }

  return (
    <article className="flex flex-col">
      <Link to="#" className="flex items-center gap-1">
        <Avatar className="w-5 h-5">
          <AvatarImage src={user.imageURL} />
          <AvatarFallback>
            {user.username.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <p className="text-sm tracking-tight text-muted-foreground">
          {user.username}:
        </p>
      </Link>
      <p
        className="mt-1 tracking-tight leading-relaxed"
        dangerouslySetInnerHTML={{ __html: highlightMentions() }}
      ></p>
    </article>
  )
}

export default Comment
