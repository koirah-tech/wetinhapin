import Link from "next/link"

import { Button } from "@workspace/ui/components/button"
import ThemeToggle from "@workspace/ui/components/common/themeToggle";

export default function Page() {
  return (
      <div className="flex items-center justify-center min-h-svh">
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className="text-2xl font-bold">Customer Portal</h1>
          <Button size="sm">Button</Button>
          <Link href="/about">About</Link>
            <ThemeToggle />
        </div>
      </div>
  )
}
