import { Alert, AlertDescription, AlertTitle } from "./alert";

export default function ErrorState({ message }: { message: string }) {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-background p-4">
      <Alert>
        <AlertTitle>Erro ao carregar!</AlertTitle>
        <AlertDescription>{message || "Ocorreu um erro inesperado. Tente novamente mais tarde."}</AlertDescription>
      </Alert>
    </div>
  )
}