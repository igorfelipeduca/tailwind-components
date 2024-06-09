import BentoCard from "@/components/bento-card"
import DateStats from "@/components/date-stats"
import { ArrowRight, Happyemoji } from "iconsax-react"

export default function Home() {
  return (
    <div className="w-full py-8">
      <DateStats />

      <div className="py-8">
        <div className="grid grid-cols-3 gap-x-4">
          <BentoCard
            className="h-full"
            width="fit"
            backgroundImage={
              "https://images.unsplash.com/photo-1489403290543-f9908e831043?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
          >
            <div className="flex h-full flex-col justify-between">
              <div>
                <h3 className="text-sm font-medium text-zinc-400">
                  Welcome back,
                </h3>

                <h1 className="text-2xl font-bold text-white">Igor Duca</h1>

                <h3 className="mt-4 text-sm font-semibold text-zinc-500">
                  Your customers have been <br />
                  waiting for you.
                </h3>
              </div>

              <div className="group flex cursor-pointer items-center gap-x-2 text-zinc-300 transition-all duration-150 ease-linear hover:gap-x-3">
                <p className="text-xs font-semibold">Access your dashboard</p>

                <ArrowRight className="size-4" />
              </div>
            </div>
          </BentoCard>

          <BentoCard className="h-full" width={"fit"}>
            <div className="rounded-xl shadow-lg">
              <div className="p-8">
                <h1 className="text-2xl font-bold text-white">
                  Satisfaction Rate
                </h1>
                <h3 className="mt-2 text-sm font-medium text-zinc-400">
                  From all projects
                </h3>
                <div className="mt-6 flex items-center justify-center">
                  <div className="relative h-24 w-24">
                    <svg
                      className="absolute inset-0 h-full w-full"
                      viewBox="0 0 36 36"
                    >
                      <path
                        className="stroke-current text-gray-700"
                        d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        strokeWidth="3.8"
                      />
                      <path
                        className="stroke-current text-blue-600"
                        d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831"
                        fill="none"
                        strokeWidth="3.8"
                        strokeDasharray="95, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span role="img" aria-label="smiley" className="text-2xl">
                        <Happyemoji className="size-8 text-blue-600" />
                      </span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-4xl font-bold text-white">95%</span>
                  <p className="text-sm font-medium text-zinc-400">
                    Based on likes
                  </p>
                </div>
              </div>
            </div>
          </BentoCard>

          <BentoCard className="h-full w-[30rem]" width={"fit"}>
            <div className="flex gap-x-4 p-8">
              <div>
                <h1 className="text-2xl font-bold text-white">
                  Referral Tracking
                </h1>

                <div className="mt-4 w-40 rounded-xl bg-[#121b42] px-4 py-2">
                  <span className="text-xs text-zinc-400">Invited</span>

                  <h3 className="text-md font-semibold">145 people</h3>
                </div>

                <div className="mt-4 w-40 rounded-xl bg-[#121b42] px-4 py-2">
                  <span className="text-xs text-zinc-400">Bonus</span>

                  <h3 className="text-md font-semibold">1,456</h3>
                </div>
              </div>

              <div className="mt-6 flex items-center justify-center">
                <div className="relative h-48 w-48">
                  <svg
                    className="absolute inset-0 h-full w-full"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="stroke-current text-gray-700"
                      d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      strokeWidth="3.8"
                    />
                    <path
                      className="stroke-current text-emerald-600"
                      d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831"
                      fill="none"
                      strokeWidth="3.8"
                      strokeDasharray="95, 100"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex flex-col items-center justify-center">
                      <span className="text-sm font-semibold text-zinc-400">
                        Safety
                      </span>

                      <h3 className="text-4xl font-bold text-white">9.3</h3>

                      <span className="text-sm font-semibold text-zinc-400">
                        Total Score
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </div>
  )
}
