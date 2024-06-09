import StatsCard from "@/components/stats-card"
import { Book, UserSquare, WalletMinus } from "iconsax-react"

const cards = [
  {
    title: "Today's amount",
    count: 800000,
    percent: 30,
    icon: <WalletMinus className="h-full w-full" />,
  },
  {
    title: "Today's users",
    count: 15000,
    percent: 15,
    icon: <UserSquare className="h-full w-full" />,
  },
  {
    title: "New clients",
    count: 3000,
    percent: -7,
    icon: <Book className="h-full w-full" />,
  },
]

export default function DateStats() {
  return (
    <div className="grid grid-cols-3 gap-x-4">
      {cards.map((card, index) => (
        <StatsCard
          key={index}
          size="sm"
          border="up"
          title={card.title}
          count={card.count}
          percent={card.percent}
          icon={card.icon}
        />
      ))}
    </div>
  )
}
