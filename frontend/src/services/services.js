import axios from "axios";

export const LoginUser = async (body) => {
  
    try {
      ;
      const response = await axios.post("http://localhost:4040/api/login",body);
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message)
      
    }
  };