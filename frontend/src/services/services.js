import axios from "axios";

const axiosInstance = axios.create({
  headers: {
      'Authorization': localStorage.getItem("token")
    } // Assuming baseURL is defined somewhere
});
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
      debugger
      const response = await axiosInstance.get(process.env.REACT_APP_BASE_URL+`fetchuser`,
     
      );
      
      localStorage.setItem("userdetails",response?.data?.data?._id)
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };

  export const FetchMenuCards = async () => {
  
    try {
      const response = await axiosInstance.get(process.env.REACT_APP_BASE_URL+`fetchMenuCards`,
      
      );
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };
  export const FetchAllMenuCards = async (userId) => {
  
    try {
      const response = await axios.get(process.env.REACT_APP_BASE_URL+`fetchAllMenuCards/${userId}`,
      
      );
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };

  
  export const AddMenuCard = async (body) => {
  
    try {
      const response = await axiosInstance.post(process.env.REACT_APP_BASE_URL+`addMenuCard`,body,
      
      );
      return response?.data;
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };
  export const DeleteMenuCard = async (id) => {
  
    try {
      
      const response = await axiosInstance.delete(process.env.REACT_APP_BASE_URL+`deleteMenuCard/${id}`,
      );
      
      return response?.data;
      
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };
  export const UpdateMenuCard = async (body) => {
  
    try {
      
      const response = await axiosInstance.put(process.env.REACT_APP_BASE_URL+`updateMenuCard`,body,
      
      );
      
      return response?.data;
      
    } catch (error) {
      alert(error?.response?.data?.message||error)
      
    }
  };