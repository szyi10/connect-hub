import { useEffect, useState } from "react"
import { useUser } from "@clerk/clerk-react"
import { useConvexAuth } from "convex/react"
import { useMutation } from "convex/react"
import { api } from "../../convex/_generated/api"

export const useStoreUserEffect = () => {
  const { isAuthenticated } = useConvexAuth()
  const { user } = useUser()
  const storeUser = useMutation(api.users.storeUser)

  const [userId, setUserId] = useState()

  useEffect(() => {
    if (!isAuthenticated) {
      return
    }

    const createUser = async () => {
      const usernameFromEmail =
        user.emailAddresses[0].emailAddress.split("@")[0]

      const id = await storeUser({
        id: user.id,
        username: user.username ? user.username : usernameFromEmail,
        imageURL: user.imageUrl,
      })
      setUserId(id)
    }
    createUser()

    return () => setUserId(null)
  }, [isAuthenticated, storeUser, user])

  return userId
}
