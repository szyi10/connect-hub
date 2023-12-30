import { Suspense, lazy } from "react"
import { Routes, Route } from "react-router-dom"
import { useStoreUserEffect } from "./hooks/use-store-users"

import Layout from "./components/layout/Layout"
import { Spinner } from "@/components/ui/spinner"
import NotFound from "./pages/NotFound"

const Posts = lazy(() => import("./pages/Posts"))
const Post = lazy(() => import("./pages/Post"))

const App = () => {
  const userId = useStoreUserEffect()
  if (userId === null) {
    return <p>Storing user...</p>
  }

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="w-full h-screen flex items-center justify-center">
            <Spinner size="icon" />
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<Posts />} />
          <Route path="/post/:postId" element={<Post />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
