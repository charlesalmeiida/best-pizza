import { Products } from "@/lib/stripe"
import Image from "next/image"
import { AddToCartButton } from "./add-to-cart-button"
import { formatPrice } from "@/lib/utils"

interface ProductProps {
  product: Products
}

export function Product({ product }: ProductProps) {
  const price = formatPrice(product.price / 100) 

  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative h-72 w-72">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 1200px) 100%"
        />
      </div>
      <h3 className="text-gray-900 m-0 text-xl font-semibold">
        {product.name}
      </h3>

      <p className="text-gray-700 text-lg">{price}</p>

      <AddToCartButton product={product} />
    </div>
  )
}
