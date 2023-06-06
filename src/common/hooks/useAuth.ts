import { useReactiveVar } from "@apollo/client"
import { authToken } from "../vars"

const useAuth = () => {
    const token = useReactiveVar(authToken);

    return ({
        isAuth: token !== undefined,
        token
    })
}

export default useAuth;