import Image from "next/image"

import profileImage from "../../public/profile.jpeg"

export default function Profile() {
  return (
    <div className="flex items-center gap-x-2">
      <div className="size-14">
        <Image
          alt="profile"
          src={profileImage}
          className="h-full w-full rounded-full"
        />
      </div>

      <div className="space-y-1">
        <h3 className="text-md font-medium">Igor Duca</h3>
        <p className="text-sm text-zinc-400">@ducaswtf</p>
      </div>
    </div>
  )
}
