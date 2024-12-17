"use client"

import { createContext, PropsWithChildren, useContext, useState } from "react"

export interface ProductsContext {
  id: string
  name: string
  image: string
  price: number
  quantity: number
}

interface CartContextProps {
  products: ProductsContext[]
  total: number
  addProduct: (product: ProductsContext) => void
  removeProduct: (productId: string) => void
  updateProduct: (productId: string, quantity: number) => void
}

const CartContext = createContext<CartContextProps | null>(null)

export function CartProvider({ children }: PropsWithChildren) {
  const [products, setProducts] = useState<ProductsContext[]>([])

  const addProduct = (product: ProductsContext) => {
    const productIndex = products.findIndex((p) => p.id === product.id)

    if (productIndex === -1) {
      setProducts([...products, product])
    } else {
      const newProducts = products.map((p) => {
        if (p.id === product.id) {
          return {
            ...p,
            quantity: p.quantity + 1,
          }
        }
        return p
      })

      setProducts([...newProducts])
    }
  }

  const removeProduct = (productId: string) => {
    const newProducts = products.filter((p) => p.id !== productId)

    setProducts([...newProducts])
  }

  const updateProduct = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeProduct(productId)
      return
    } else {
      const newProducts = products.map((p) => {
        if (p.id === productId) {
          return {
            ...p,
            quantity,
          }
        }
        return p
      })

      setProducts([...newProducts])
    }
  }

  const total = products.reduce((acc, p) => acc + p.price * p.quantity, 0)

  return (
    <CartContext.Provider
      value={{ products, removeProduct, updateProduct, addProduct, total }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const cart = useContext(CartContext)

  if (!cart) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return cart
}
