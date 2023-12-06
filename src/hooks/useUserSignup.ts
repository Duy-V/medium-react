import {useMutation} from "@tanstack/react-query";
import {signupAPI} from "../services/users" 
export const useUserSignup = () =>{
    return useMutation({
        mutationFn: ({username,email, password}: {username: string,email:string, password:string})=> signupAPI(username,email,password)
    })
}