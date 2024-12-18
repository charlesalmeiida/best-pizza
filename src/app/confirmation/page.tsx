import { Check } from "lucide-react"
import Image from "next/image"

export default function Confirmation() {
  return (
    <main className="container flex mx-auto mt-4 items-center justify-between">
      <div>
        <Check className="text-emerald-500" size={100} />
        <h1 className="text-4xl font-bold">Obrigado, pedido efetuado com sucesso!</h1>
        <p className="mt-4 text-2xl text-zinc-600">
          Em poucos minutos você receberá suas deliciosas pizzas na sua casa.
        </p>
      </div>

      <Image
        src={"/image-confirmation.jpg"}
        alt={"Imagem de entrega"}
        width={500}
        height={500}
      />
    </main>
  )
}
