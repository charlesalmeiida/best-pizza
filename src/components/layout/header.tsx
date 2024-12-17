import Link from "next/link"
import { Pizza } from "lucide-react"
import { Cart } from "@/components/home/cart"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto flex items-center justify-between py-6">
        <Link href={"/"} className="flex items-center gap-2">
          <Pizza className="text-red-500" size={40} />
          <span className="text-3xl font-semibold">Best Pizza</span>
        </Link>
        <Cart />
      </div>
    </header>
  )
}
