import { Routes, Route } from "react-router-dom"
import { ChatPage } from "../Pages/Chat/Chat"


export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path='/*' element={<ChatPage />} />
                <Route path='/' element={<ChatPage />} />
            </Routes>
        </>
    )
}