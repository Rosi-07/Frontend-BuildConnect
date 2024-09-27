import { Route } from "react-router-dom";
import Layout from "../components/layout/Layout.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/login/Login.jsx";
import ContactUs from "../pages/contactUs/ContactUs.jsx";
import AboutUs from "../pages/aboutUs/AboutUs.jsx";

const routes = (
    <>

        <Route path="/" element={<Layout />}>
            <Route path="/aboutUs" element={<AboutUs />} />
            <Route path="/contactUs" element={<ContactUs />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
        </Route>
    </>
);



export default routes;

