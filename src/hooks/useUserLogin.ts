import {useMutation} from "@tanstack/react-query";
import {loginAPI} from "../services/users" 
export const useUserLogin = () =>{
    return useMutation({
        mutationFn: ({email, password}: {email:string, password:string})=> loginAPI(email,password)
    })
}