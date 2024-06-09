import type { Metadata } from "next"
import { Inter, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"

const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Tailwind Components",
  description: "A set of components created with clsx + tailwind-variants",
  openGraph: {
    title: "Tailwind Components",
    description: "A set of components created with clsx + tailwind-variants",
    url: "https://tailwind-components-indol.vercel.app/",
    images: [
      {
        url: "https://i.ibb.co/YcBdyJ0/og.png",
        width: 1200,
        height: 630,
        alt: "Duca",
      },
    ],
    siteName: "Tailwind Components",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ducaswtf",
    title: "Tailwind Components",
    description: "A set of components created with clsx + tailwind-variants",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={plusJakarta.className}>
        <div className="flex gap-x-4">
          <Sidebar />

          <div className="pl-64">{children}</div>
        </div>
      </body>
    </html>
  )
}
