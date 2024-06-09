import clsx from "clsx"
import { ComponentProps } from "react"
import { VariantProps, tv } from "tailwind-variants"

const statsCard = tv({
  base: "rounded-lg py-2 px-4 bg-bg-[#0A0E23]",
  variants: {
    size: {
      sm: "text-sm",
      lg: "text-md",
    },
    border: {
      default: "border border-zinc-800",
      none: "border-none",
      up: "border border-blue-900/60",
      down: "border border-red-900",
    },
  },
})

type StatsCardProps = ComponentProps<"div"> &
  VariantProps<typeof statsCard> & {
    title: string
    count: number
    percent: number
    icon: React.ReactNode
  }

export default function StatsCard({
  className,
  size,
  border,
  title,
  count,
  percent,
  ...props
}: StatsCardProps) {
  const isUp = percent > 0

  return (
    <div className={statsCard({ size, border, className })}>
      <div className="flex items-center justify-between gap-x-4">
        <div>
          <p className="text-sm text-zinc-500">{title}</p>

          <div className="flex items-center gap-x-2">
            <h3 className="text-lg font-medium text-zinc-300">
              ${count.toLocaleString()}
            </h3>

            <span
              className={clsx(
                "text-sm font-medium",
                isUp ? "text-blue-600" : "text-red-600",
              )}
            >
              {percent}% {isUp ? <>&uarr;</> : <>&darr;</>}
            </span>
          </div>
        </div>

        <div
          className={clsx(
            "flex size-12 items-center rounded-lg p-2 text-white",
            isUp ? "bg-blue-700" : "bg-red-700",
          )}
        >
          {props.icon}
        </div>
      </div>
    </div>
  )
}
