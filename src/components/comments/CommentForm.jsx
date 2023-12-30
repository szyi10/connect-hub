import { useRef } from "react"
import { useMutation, useQuery } from "convex/react"

import { api } from "../../../convex/_generated/api"

import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { useParams } from "react-router-dom"
import { useUser } from "@clerk/clerk-react"

const CommentForm = () => {
  const commentRef = useRef()
  const { postId } = useParams()
  const { user } = useUser()
  const userData = useQuery(api.users.getUser, { id: user.id })
  const createComment = useMutation(api.comments.createComment)

  const handleSubmit = (e) => {
    e.preventDefault()

    createComment({
      comment: commentRef.current.value,
      userID: userData[0]._id,
      postID: postId,
    })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex flex-col items-end gap-2"
    >
      <Textarea
        ref={commentRef}
        placeholder="Leave a comment..."
        className="w-full bg-muted"
      />
      <Button>Add Comment</Button>
    </form>
  )
}

export default CommentForm
