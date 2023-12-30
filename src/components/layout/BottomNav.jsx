import { Link } from "react-router-dom"
import { useConvexAuth } from "convex/react"

import { Home, Search, Settings } from "lucide-react"
import PostDialog from "../posts/PostDialog"

const BottomNav = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()

  return (
    <nav className="fixed bottom-0 left-0 right-0 pt-3 pb-2 bg-muted rounded-t-2xl sm:hidden shadow">
      <div className="w-full h-full flex items-center justify-evenly">
        <Link to="/" className="flex flex-col items-center gap-1">
          <Home />
          <small className="text-xs font-medium text-muted-foreground">
            Home
          </small>
        </Link>
        <Link to="/" className="flex flex-col items-center gap-1">
          <Search />
          <small className="text-xs font-medium text-muted-foreground">
            Search
          </small>
        </Link>
        {isAuthenticated && !isLoading && <PostDialog />}
        <Link to="/" className="flex flex-col items-center gap-1">
          <Settings />
          <small className="text-xs font-medium text-muted-foreground">
            Settings
          </small>
        </Link>
      </div>
    </nav>
  )
}

export default BottomNav
