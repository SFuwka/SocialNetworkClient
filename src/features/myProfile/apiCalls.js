import axiosInstance from '../axiosSettings'


const profileApi = {

    updateProfileInfo(profileInfo) {
        return axiosInstance.put('users', profileInfo).then(response => {
            return response.data
        })
    },

    setUserStatus(status) {
        return axiosInstance.post('users/status', { status }).then(response => {
            console.log(response,'RESPONSE')
            return response.data
        })
    }
}

export default profileApi