import { Document, Home } from "iconsax-react"
import Button from "./button"
import Profile from "./profile"
import { FaGithub } from "react-icons/fa"
import { BsTwitterX } from "react-icons/bs"

export default function Sidebar() {
  return (
    <div className="fixed h-screen w-56 space-y-8 border-r border-zinc-800 px-4 py-8">
      <Profile />

      <div className="w-full border-b border-zinc-800" />

      <Button action size="sm" fontWeight="medium">
        <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800 p-1">
          <Home className="size-4 text-zinc-400" />
        </div>
        <span>Home</span>
      </Button>

      <Button
        action
        size="sm"
        fontWeight="medium"
        href="https://github.com/igorfelipeduca/tailwind-components"
      >
        <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800 p-1">
          <FaGithub className="size-4 text-zinc-400" />
        </div>
        <span>Repository</span>
      </Button>

      <Button
        action
        size="sm"
        fontWeight="medium"
        href="https://twitter.com/ducaswtf"
      >
        <div className="flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-800 p-1">
          <BsTwitterX className="size-4 text-zinc-400" />
        </div>
        <span>Twitter</span>
      </Button>
    </div>
  )
}
