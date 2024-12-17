import { getProducts } from "@/lib/stripe"
import { Product } from "@/components/home/product"

export async function Menu() {
  const products = await getProducts()

  return (
    <div className="container mx-auto py-14">
      <h2 className="mb-4 text-3xl font-semibold text-gray-900">
        Nosso Cardápio
      </h2>
      <ul className="grid grid-cols-4 gap-8">
        {products.map((product) => (
          <Product product={product} key={product.id} />
        ))}
      </ul>
    </div>
  )
}
