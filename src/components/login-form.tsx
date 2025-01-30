import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Image from "next/image"

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  return (
    <form className={cn("flex flex-col gap-6", className)} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Entre na sua conta</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Para ter acesso ao dashboard
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="exemplo@email.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Senha</Label>
            <Link
              href="#"
              className="ml-auto text-gray-700 text-sm underline-offset-4 hover:underline"
            >
              Esqueceu sua senha?
            </Link>
          </div>
          <Input
            id="password"
            type="password"
            placeholder="**********"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Entrar
        </Button>
        <div className="relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t after:border-border">
          <span className="relative z-10 bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
        <Button variant="outline" className="w-full">
          <Image src={"/icon-google.svg"} alt="Google" width={20} height={20} />
          Entre com o Google
        </Button>
      </div>
      <div className="text-center text-sm">
        Ainda não tem uma conta?
        <Link href="#" className="underline underline-offset-4 ml-1">
          Cadastre-se
        </Link>
      </div>
    </form>
  )
}
