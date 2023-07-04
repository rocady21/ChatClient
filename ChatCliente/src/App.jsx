import { AppRouter } from "./routes/AppRouter"
import { LoginRouter } from "./routes/LoginRouter"

export const Aplication = () => {

  const state = "no-autenticado"
  return (
    <div className="w-full">
      {state === "no-autenticad" ? <LoginRouter /> : <AppRouter />}
    </div>
  )
}


