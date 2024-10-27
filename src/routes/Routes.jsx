import { Route } from "react-router-dom";
import RequireAuth from '../components/auth/RequireAuth.jsx';
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import ContactUs from "../pages/contactUs/ContactUs.jsx";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";
import RegisterType from "../pages/register/RegisterType.jsx";
import RegisterUser from "../pages/register/registerUser/RegisterUser.jsx";
import RegisterCompany from "../pages/register/registerCompany/RegisterCompany.jsx";
    // import ProjectMarketplace from "../pages/projectMarketplace/ProjectMarketplace.jsx";
import ProjectDetails from "../pages/projectDetails/ProjectDetails.jsx";
import Unauthorized from '../pages/unauthorized/unauthorized.jsx';
import PersistLogin from '../components/auth/PersistLogin.jsx';
import Admin from "../pages/admin/Admin.jsx";
import Users from "../pages/admin/users/Users.jsx";
import Companies from "../pages/admin/companies/companies.jsx";


const routes = (
    <>
      <Route element={<PersistLogin/>}>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterType />} />
            <Route path="/registerUser" element={<RegisterUser />} />
            <Route path="/registerCompany" element={<RegisterCompany />} />
            {/* <Route path="/marketplace" element={<ProjectMarketplace />} />
            <Route element={<RequireAuth allowedRoles={['admin', 'company']} />}>
               <Route path="/marketplace/:id" element={<ProjectDetails />} />
            </Route>
            <Route path="/unauthorized" element={<Unauthorized />} /> */}

                   </Route>
      </Route>

        <Route element={<RequireAuth allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/companies" element={<Companies />} />
        </Route>
    </>
);



export default routes;

