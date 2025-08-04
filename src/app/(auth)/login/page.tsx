import LoginForm from "./form";

export default function LoginPage() {
  return (
    <div className="flex w-full items-center justify-center min-h-screen p-4 bg-secondary">
      <div className="w-full max-w-md space-y-6">
        <h1 className="text-2xl font-bold text-center text-secondary-foreground">
          Iniciar sesión
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}
