import { Button } from "@/components/ui/button"
import Link from "next/link"

export const LoginButton = () => {
  return (
    <Button asChild variant="secondary" className="hidden md:flex md:mt-2 md:col-span-1 md:max-w-40 md:justify-self-end">
      <Link href="/login">Iniciar sesión</Link>
    </Button>
  )
}

export default LoginButton;