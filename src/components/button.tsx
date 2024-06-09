import { ComponentProps } from "react"
import { tv, VariantProps } from "tailwind-variants"

const button = tv({
  base: "py-2 px-4 rounded-lg border bg-zinc-900 border-zinc-800 w-full text-zinc-400 hover:bg-zinc-800 hover:border-zinc-700 transition-all duration-150",
  variants: {
    size: {
      sm: "py-1 px-2 rounded-md",
      lg: "py-2 px-4 rounded-lg",
    },
    action: {
      true: "flex items-center gap-x-2",
    },
    fontWeight: {
      bold: "font-bold",
      normal: "font-normal",
      medium: "font-medium",
    },
  },
})

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    href?: string
  }

export default function Button({
  action,
  size,
  fontWeight,
  className,
  href,
  ...props
}: ButtonProps) {
  if (href) {
    return (
      <a
        className={button({ action, size, fontWeight, className })}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {props.children}
      </a>
    )
  }

  return (
    <button
      {...props}
      className={button({ action, size, fontWeight, className })}
    >
      {props.children}
    </button>
  )
}
