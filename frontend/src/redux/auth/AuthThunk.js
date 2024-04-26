import { LoginUser } from "../../services/services";
import { SetError, SetLoading, SetUser } from "./LoginSlice"
 
export const LoginThunk=(userData)=>async (dispatch)=>{
    
try {
    dispatch(SetLoading(true));
    const response=await LoginUser(userData);
    if(response.message==="successfull"){
        dispatch(SetUser(response));
        dispatch(SetLoading(false));

    }
} catch (error) {
    dispatch(SetError(error));
    dispatch(SetLoading(false));
}
}