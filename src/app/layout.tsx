import type { Metadata } from "next"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Header } from "@/components/layout/header"
import { CartProvider } from "@/context/cart-context"

export const metadata: Metadata = {
  title: "Best Pizza",
  description: "Best Pizza é um app de delivery de pizza.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`antialiased`}>
        <CartProvider>
          <Header />
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
