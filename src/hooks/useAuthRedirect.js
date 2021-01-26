import { useSelector } from 'react-redux'
import { isAuthorized, isFetching } from '../features/auth/authSlice'

const useAuthRedirect = () => {
    const isAuth = useSelector(isAuthorized)
    const pending = useSelector(isFetching)
    if (!isAuth && !pending) {
        return true
    }
    return false
}

export default useAuthRedirect