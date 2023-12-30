import { useRef } from "react"
import { useMutation } from "convex/react"
import { useUser } from "@clerk/clerk-react"

import { api } from "../../../convex/_generated/api"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { FileText, Plus } from "lucide-react"

const PostDialog = ({ text }) => {
  const titleRef = useRef()
  const categoryRef = useRef()
  const textRef = useRef()

  const { user } = useUser()

  const createPost = useMutation(api.posts.createPost)

  const getDate = () => {
    const date = new Date()

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    const hour = date.getHours()
    const minute = date.getMinutes()

    const addZero = (number) => (number < 10 ? `0${number}` : number)

    const formattedDate = `${hour}:${addZero(minute)} ${addZero(day)}/${addZero(
      month
    )}/${year}`

    return formattedDate
  }

  const handleSubmit = () => {
    console.log(`SUBMITTED:
    TITLE: ${titleRef.current.value}
    AUTHOR: ${user.fullName}
    CATEGORY: ${categoryRef.current.value}
    TEXT: ${textRef.current.value}
    DATE: ${getDate()}
    LIKES: 0
    DISLIKES: 0
    COMMENTS: 0
    `)

    createPost({
      title: titleRef.current.value,
      author: user.fullName,
      category: categoryRef.current.value,
      text: textRef.current.value,
      date: getDate(),
      likes: 0,
      dislikes: 0,
      comments: 0,
    })
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="sm"
          variant="ghost"
          className="hidden sm:flex items-center gap-2"
        >
          <FileText className="w-5 h-5" />
          Create Post
        </Button>
      </DialogTrigger>
      <DialogTrigger asChild>
        <button className="sm:hidden flex flex-col items-center gap-1">
          <Plus />
          <small className="text-xs font-medium text-muted-foreground">
            Create
          </small>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New Post</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="title">Title</Label>
            <Input
              ref={titleRef}
              type="text"
              id="title"
              placeholder="Title"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="category">Category (optional)</Label>
            <Input
              ref={categoryRef}
              type="text"
              id="category"
              placeholder="Category"
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="text">Text</Label>
            <Textarea
              ref={textRef}
              id="text"
              defaultValue={text}
              placeholder="Text"
              className="max-h-56"
              required
            />
          </div>
          <div className="grid w-full items-center gap-1.5">
            <Label htmlFor="picutres">Pictures (optional)</Label>
            <Input type="file" id="picutres" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleSubmit}>
            Add Post
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PostDialog
