import { AppRouter } from "./routes/AppRouter"
import { LoginRouter } from "./routes/LoginRouter"

export const Aplication = () => {

  const state = "no-autenticado"
  return (
    <>
      {state === "no-autenticad" ? <LoginRouter /> : <AppRouter />}
    </>
  )
}


