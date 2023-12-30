import { useConvexAuth } from "convex/react"
import { SignInButton, UserButton } from "@clerk/clerk-react"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { Button } from "@/components/ui/button"
import { Spinner } from "@/components/ui/spinner"
import { cn } from "@/lib/utils"

import Logo from "./Logo"
import { Link } from "react-router-dom"
import PostDialog from "../posts/PostDialog"
import { Search, Settings } from "lucide-react"

const Navbar = () => {
  const { isAuthenticated, isLoading } = useConvexAuth()
  const scrolled = useScrollTop()

  return (
    <nav
      className={cn(
        "z-50 bg-background fixed top-0 flex items-center w-full p-6",
        scrolled && "border-b shadow-sm"
      )}
    >
      <div className="max-w-7xl w-full mx-auto flex justify-between items-center">
        <Logo />
        <div className="ml-auto justify-end w-full flex items-center gap-x-2">
          {isLoading && <Spinner />}
          {!isAuthenticated && !isLoading && (
            <SignInButton mode="modal">
              <Button>Sign In</Button>
            </SignInButton>
          )}
          {isAuthenticated && !isLoading && (
            <>
              <div className="hidden sm:flex">
                <PostDialog />
                <Button variant="ghost" size="sm">
                  <Link to="/search" className="flex items-center gap-2 ">
                    <Search className="w-5 h-5" />
                    Search
                  </Link>
                </Button>
                <Button variant="ghost" size="sm">
                  <Link to="/settings" className="flex items-center gap-2 ">
                    <Settings className="w-5 h-5" />
                    Settings
                  </Link>
                </Button>
              </div>
              <UserButton afterSignOutUrl="/" />
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
