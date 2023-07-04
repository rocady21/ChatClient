import { useSelector } from "react-redux"


export const useUserSlice = () => {

    const { user, stateUser, messageError } = useSelector((state) => state.user)



    return {
        user,
        stateUser,
        messageError

    }
} 