import { useConvexAuth } from "convex/react"

import { useQuery } from "convex/react"
import { api } from "../../../convex/_generated/api"

import Comment from "./Comment"
import CommentForm from "./CommentForm"
import { Spinner } from "../ui/spinner"
import { useParams } from "react-router-dom"

const Comments = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const { postId } = useParams()

  const listComments = useQuery(api.comments.listComments, { postID: postId })

  if (!listComments) {
    return <Spinner />
  }

  return (
    <section className="mt-2">
      {isAuthenticated && !isLoading && <CommentForm />}
      <h2 className="text-lg tracking-tight font-semibold">
        Comments ({listComments.length}):
      </h2>
      <div className="flex flex-col gap-3 mt-2">
        {listComments.map((comment) => (
          <Comment key={comment._id} data={comment} />
        ))}
      </div>
    </section>
  )
}

export default Comments
