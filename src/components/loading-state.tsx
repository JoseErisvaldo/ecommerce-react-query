import { Spinner } from "./spinner";

export default function LoadingState() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <Spinner />
        <p className="text-sm text-muted-foreground">Carregando...</p>
      </div>
    </div>
  )
}
