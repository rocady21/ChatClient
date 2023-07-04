import { Routes, Route } from "react-router-dom"
import { ChatPage } from "../Pages/Chat/Chat"
import { NavBar } from "../components/NavBar"


export const AppRouter = () => {
    return (
        <div className="w-full h-full flex">
            <NavBar />
            <Routes>
                <Route path='/*' element={<ChatPage />} />
                <Route path='/' element={<ChatPage />} />
            </Routes>
        </div>
    )
}