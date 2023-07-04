import { Route, Routes } from "react-router-dom"
import { Login } from "../Pages/Login/Login"
import { RegisterPage } from "../Pages/Register/RegisterPage"

export const LoginRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Login />} />
                <Route path='/' element={<Login />} />
                <Route path='/register' element={<RegisterPage />} />
            </Routes>
        </>
    )
}