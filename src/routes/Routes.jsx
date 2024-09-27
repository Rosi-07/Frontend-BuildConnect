import { Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";

const routes = (
    <>
  
   <Route  path="home" element={<Home />} >
   </Route> 
    <Route path="/" element={<Layout />}>
    <Route path="login" element={<Login />} />
     </Route>   
    </>
);

export default routes;

