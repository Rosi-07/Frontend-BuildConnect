import { Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import ContactUs from "../pages/contactUs/ContactUs.jsx";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";
import RegisterType from "../pages/register/RegisterType.jsx";
import RegisterUser from "../pages/register/registerUser/RegisterUser.jsx";
import RegisterCompany from "../pages/register/registerCompany/RegisterCompany.jsx";
    // import Suscription from "../pages/methodPay/Suscription.jsx";
import Admin from "../pages/admin/Admin.jsx";
import Users from "../pages/admin/users/Users.jsx";
import Companies from "../pages/admin/companies/companies.jsx";
import RequireAuth from "../components/auth/RequireAuth.jsx";


const routes = (
    <>

        <Route path="/" element={<Layout />}>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterType />} />
            <Route path="/registerUser" element={<RegisterUser />} />
            <Route path="/registerCompany" element={<RegisterCompany />} />
            {/* <Route path="/methodPay" element={<Suscription />} /> */}

           
       
        </Route>

 
             <Route element={<RequireAuth allowedRoles={["admin"]} />}>
                <Route path="/admin" element={<Admin />} >
                <Route path="user" element={<Users />} />
                <Route path="company" element={<Companies />} />
                </Route>
            </Route>
    </>
);



export default routes;

