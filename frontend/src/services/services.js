import axios from "axios";

// const baseURL="sdhfkjsdf";
// const axiosInstance = axios.create({
//   headers: {}, // <-- Use 'headers' instead of 'header'
//   baseURL: baseURL // Assuming baseURL is defined somewhere
// });
export const LoginUser = async (body) => {
  
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL+"login",body
    
      // {
      //    headers: {
      //   'Authorization': localStorage.getItem("Authorization")
      // }}
      );
      
      localStorage.setItem('token',response?.data?.data)
     
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };
  export const SignUp = async (body) => {
  
    try {
      const response = await axios.post(process.env.REACT_APP_BASE_URL+`register`,body
      );
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };
  export const FetchUser = async () => {
  
    try {
      const response = await axios.get(process.env.REACT_APP_BASE_URL+`fetchuser`,
      {
        headers:{
          Authorization:localStorage.getItem("token")
        }
      }
      );
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };

  export const FetchMenuCards = async () => {
  
    try {
      const response = await axios.get(process.env.REACT_APP_BASE_URL+`fetchMenuCards`,
      {
        headers:{
          Authorization:localStorage.getItem("token")
        }
      }
      );
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };