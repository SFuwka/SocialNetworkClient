import * as axios from 'axios'

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: `${process.env.REACT_APP_API_ADRESS}/api/`
})

const authApi = {

    authMe() {
        return axiosInstance.get('authme').then(response => {
            return response.data
        })
    },
    logout() {
        return axiosInstance.delete('login')
    },
    login(email, password) {
        return axiosInstance.post('login', { email, password }).then(response => {
            return response.data
        })
    },
    signUp(name, surname, email, password) {
        return axiosInstance.post('signup', { name, surname, email, password }, { withCredentials: false })
    }
}

export default authApi