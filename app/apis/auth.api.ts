import axios from "axios";


const authApi = {
    ApiLogin: async () => {
        return await axios(`/auth/login`,{
            method:"POST",
            headers: {
                'Content-Type':"application/json"
            }
        })
    }
}
export default authApi;