import AllPosts from "@/components/posts/AllPosts"

const DUMMY_POSTS = [
  {
    id: "p1",
    author: "anonymous",
    title: "What is Lorem Ipsum?",
    category: "learning",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    date: "3:10 13/12/2023",
    likes: 581,
    dislikes: 74,
    comments: 213,
  },
  {
    id: "p2",
    author: "szyi",
    title: "First post!",
    category: "dev",
    text: "First post on ConnectHub!",
    date: "17:35 18/12/2023",
    likes: 12,
    dislikes: 0,
    comments: 2,
  },
]

const Posts = () => {
  return (
    <>
      <AllPosts data={DUMMY_POSTS} />
    </>
  )
}

export default Posts
