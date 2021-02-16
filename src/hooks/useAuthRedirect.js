import { useSelector } from 'react-redux'
import { isAuthorized, isFetching } from '../features/auth/authSlice'

const useAuthRedirect = (matchParams) => {
    const isAuth = useSelector(isAuthorized)
    const pending = useSelector(isFetching)
    if (!isAuth && !pending && !matchParams) {
        return true
    }
    return false
}

export default useAuthRedirect