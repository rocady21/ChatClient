import { useEffect, useState } from "react"

export const Login = () => {

  const initialForm = {
    email: "",
    password: ""
  }

  const [form, setForm] = useState(initialForm)
  const [stateError, setStateError] = useState("")

  const validarLogin = (e) => {
    e.preventDefault()
    if (!form.email && !form.password) {
      setStateError("Debe de ingresar valores valido")
    } else if (!form.email >= 1) {
      setStateError("Debe de ingresar un email valido")

    } else if (!form.password >= 1) {
      setStateError("Debe de ingresar una contraseña valida")

      //funcion que llame la api para validar el login
    } else {
      console.log("se puede mandar el fomulario")
    }

  }

  useEffect(() => {
    console.log(stateError)
  }, [stateError])

  const guardarValores = ({ e, key }) => {
    console.log(key)
    const value = e.target.value
    setForm({ ...form, [key]: value })
    setStateError("")

  }

  return (
    //medidas con tailwinds 
    //sm	640px 
    //md	768px
    //lg	1024px 
    //xl	1280px 
    //2xl	1536px
    <div className='text-black  2xl:w-[900px] xl:w-[800px] lg:w-[800px] md:w-[700px] sm:w-full h-[400px] bg-black/30 m-auto mt-[150px] flex flex-row shadow-xl shadow-black/30'>
      <div className="formulario w-[45%] px-[20px] pt-[20px] pb-[40px]  bg-black/70">
        <p className="text-center text-white text-[30px]">Login  </p>
        {
          stateError.length > 0 && <p className="w-full text-white bg-red-500 px-[10px] py-[5px] ">{stateError}</p>
        }
        <form action="" onSubmit={validarLogin} className="flex h-full flex-col justify-around fromLogin box-border ">
          <input className="input focus:outline-none focus:border-none rounded-[5px] shadow-[40px]" type="email" placeholder="example@gmail.com" onChange={(e) => guardarValores({ e, key: "email" })} />
          <input className="input focus:outline-none focus:border-none rounded-[5px] shadow-[40px]" type="password" placeholder="example123" onChange={(e) => guardarValores({ e, key: "password" })} />
          <p className="text-center text-white">No tienes una cuenta? <span className="text-purple-500">Crear Una</span></p>
          <button className="bg-purple-400 self-center text-white text-center px-[20px] py-[5px] rounded-[4px] border-[2px] border-purple-400 hover:text-purple-400 hover:bg-white hover:border-[2px] border-purple-400">Ingresar</button>
        </form>
      </div>
      <div className="info w-[55%] flex flex-row justify-center bg-purple-400 text-white">
        <p className="self-center text-[20px] font-bold">Bienvenidos</p>
      </div>
    </div>
  )
}
