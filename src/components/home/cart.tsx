"use client"

import { CreditCard, ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { useState } from "react"
import { useCart } from "@/context/cart-context"
import { CartItem } from "./cart-item"
import { formatPrice } from "@/lib/utils"

export function Cart() {
  const { products, total, removeProduct, updateProduct } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const totalPrice = formatPrice(total / 100)

  const totalProducts = products.reduce(
    (acc, product) => acc + product.quantity,
    0
  )

  const handleModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <div className="">
        <Button variant={"outline"} size={"icon"} onClick={handleModal}>
          <ShoppingCart className="text-zinc-500" size={24} />
          {products.length > 0 && (
            <span className="absolute -right-2 -top-2 inline-flex items-center justify-center rounded-full bg-red-500 px-2 py-1 font-xs font-bold text-white">
              {totalProducts}
            </span>
          )}
        </Button>

        {isOpen && (
          <div className="absolute right-0 top-full z-20 mt-2 w-96 rounded-lg border border-gray-200 bg-white shadow-lg">
            <div className="p-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-800">
                  Seu Carrinho
                </h3>
                <span className="text-sm text-gray-700">
                  Total: {totalPrice}
                </span>
              </div>

              <ul>
                {products.map((product) => (
                  <li
                    className="flex w-full py-4 items-center justify-between"
                    key={product.id}
                  >
                    <CartItem
                      product={product}
                      removeProduct={removeProduct}
                      updateProduct={updateProduct}
                    />
                  </li>
                ))}
              </ul>

              <div className="mt-4">
                <Button className="w-full">
                  <CreditCard />
                  Finalizar pedido
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
