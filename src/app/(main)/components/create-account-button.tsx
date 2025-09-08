import { Button } from "@/components/ui/button";
import Link from "next/link";

export const CreateAccountButton = () => {
  return (
    <Button
      asChild
      className="hidden md:flex md:mt-2 md:col-span-1 md:max-w-40 justify-self-start"
    >
      <Link href="/register">
        <p className="text-primary-foreground">Creá tu cuenta</p>
      </Link>
    </Button>
  );
};

export default CreateAccountButton;
