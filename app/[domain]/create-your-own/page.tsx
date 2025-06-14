import { ArrowRight } from "lucide-react"

import { Button, buttonVariants } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Stage } from "@/components/stage"

export const metadata = {
  title: "what is a updog??",
  description: "gongaga",
}

export default function CommunityPage() {
  return (
    <main className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-4">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter sm:text-3xl md:text-5xl lg:text-6xl">
          go check this repo out :D <br className="hidden sm:inline" />
          <a href="https://github.com/mozzius/community-handles" className="underline" target="_blank">mozzius/community-handles</a>
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground sm:text-xl">
          i just got the code from their thing and yeah!! u can also <a href="https://github.com/sponsors/mozzius" className="underline">give them money</a> too if u want!
        </p>
      </div>
    </main>
  )
}
