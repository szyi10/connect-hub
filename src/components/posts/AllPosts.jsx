import { useQuery } from "convex/react"

import { api } from "../../../convex/_generated/api"

import Post from "./Post"
import { Spinner } from "../ui/spinner"

const AllPosts = () => {
  const listPosts = useQuery(api.posts.listPosts)

  if (!listPosts) {
    return <Spinner />
  }

  return (
    <section className="flex flex-col">
      {listPosts.map((post) => (
        <Post key={post._id} data={post} />
      ))}
    </section>
  )
}

export default AllPosts
