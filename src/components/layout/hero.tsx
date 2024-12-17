import Image from "next/image"

export function Hero() {
  return (
    <main>
      <section className="border-b">
        <div className="container mx-auto flex justify-between">
          <div className="flex flex-col justify-center">
            <h1 className="text-6xl font-bold text-gray-900">
              A <span className="text-red-500">Melhor</span> Pizza da Cidade
            </h1>
            <p className="mt-4 text-2xl text-gray-700 max-w-lg">
              Faça seu pedido agora e experimente o sabor autêntico da Itália
              entregue na sua porta.
            </p>
          </div>
          <Image
            src={"/hero.jpg"}
            alt="Foto delivery de pizza"
            width={500}
            height={500}
          />
        </div>
      </section>
    </main>
  )
}
