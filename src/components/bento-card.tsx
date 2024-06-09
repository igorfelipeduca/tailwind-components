import { StaticImageData } from "next/image"
import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"

const bentoCard = tv({
  base: "rounded-2xl bg-gradient-to-br from-[#060B28] to-blue-900/40 backdrop-blur-lg backdrop-saturate-150 backdrop-blur-lg h-56",
  variants: {
    width: {
      full: "w-full",
      fit: "w-fit",
    },
  },
})

type BentoCardProps = ComponentProps<"div"> &
  VariantProps<typeof bentoCard> & {
    backgroundImage?: string | StaticImageData
  }

export default function BentoCard({
  className,
  backgroundImage,
  ...props
}: BentoCardProps) {
  if (backgroundImage) {
    return (
      <div className={bentoCard({ className })}>
        <div className="relative z-10 h-full bg-black/70">
          <div className="h-full p-8">{props.children}</div>
        </div>

        <div
          className="absolute inset-0 h-full rounded-2xl bg-right-top bg-no-repeat"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      </div>
    )
  }

  return <div className={bentoCard({ className })}>{props.children}</div>
}
