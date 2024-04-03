import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { Admin } from "./admin/Admin";
import { UserView } from "./components/UserView";
import   "./index.css"
import CartPage from "./components/CartPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} ></Route>
          <Route path="/Signup" element={<Signup />} ></Route>
          <Route path="/Home" element={<Home/>}></Route>
          <Route path="/admin/*" element={<Admin/>}></Route>
          <Route path="/userview/:userId" element={<UserView/>}></Route>
          <Route path="/cart" element={<CartPage/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;