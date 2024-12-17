"use client"

import { Check, ShoppingCart } from "lucide-react"
import { Button } from "../ui/button"
import { Products } from "@/lib/stripe"
import { useCart } from "@/context/cart-context"
import { useToast } from "@/hooks/use-toast"

interface AddToCartButtonProps {
  product: Products
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addProduct } = useCart()
  const { toast } = useToast()

  const handleAddProduct = () => {
    addProduct({ ...product, quantity: 1 })

    toast({
      action: (
        <div className="flex w-full items-center gap-4">
          <Check className="text-emerald-600" />
          <span>Produto adicionado ao carrinho</span>
        </div>
      ),
    })
  }

  return (
    <Button onClick={handleAddProduct}>
      <ShoppingCart className="mr-2" size={20} /> Adicionar ao carrinho
    </Button>
  )
}
