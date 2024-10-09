import { Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import ContactUs from "../pages/contactUs/ContactUs.jsx";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";
import RegisterType from "../pages/register/RegisterType.jsx";
import RegisterUser from "../pages/register/registerUser/RegisterUser.jsx";
import RegisterCompany from "../pages/register/registerCompany/RegisterCompany.jsx";
import ProjectMarketplace from "../pages/projectMarketplace/ProjectMarketplace.jsx";
import ProjectDetails from "../pages/projectDetails/ProjectDetails.jsx";

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
            <Route path="/marketplace" element={<ProjectMarketplace />} />
            <Route path="/marketplace/:id" element={<ProjectDetails />} />
        </Route>
    </>
);



export default routes;

