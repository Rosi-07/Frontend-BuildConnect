import { Route } from 'react-router-dom';
import RequireAuth from '../components/auth/RequireAuth.jsx';
import Layout from '../components/layout/Layout.jsx';
import Home from '../pages/home/Home.jsx';
import Login from '../pages/login/Login.jsx';
import ContactUs from '../pages/contactUs/ContactUs.jsx';
import AboutUs from '../pages/aboutUs/AboutUs.jsx';
import ProjectMarketplace from '../pages/projectMarketplace/ProjectMarketplace.jsx';
import ProjectDetails from '../pages/projectDetails/ProjectDetails.jsx';
import Unauthorized from '../pages/unauthorized/Unauthorized.jsx';
import PersistLogin from '../components/auth/PersistLogin.jsx';
import Admin from '../pages/admin/Admin.jsx';
import Users from '../pages/admin/users/Users.jsx';
import Companies from '../pages/admin/companies/Companies.jsx';
import Register from '../pages/register/Register.jsx';
import UserProfile from '../pages/userProfile/UserProfile.jsx';
import BusinessCatalog from '../pages/businessCatalog/BusinessCatalog.jsx';
import Payment from '../pages/payment/Payment.jsx';
import CompanyProfile from '../pages/companyProfile/CompanyProfile.jsx';

const routes = (
  <>
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/payment' element={<Payment />} />
    <Route element={<PersistLogin />}>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='/aboutUs' element={<AboutUs />} />
        <Route path='/contactUs' element={<ContactUs />} />
        <Route path='/marketplace' element={<ProjectMarketplace />} />
        <Route element={<RequireAuth allowedRoles={['admin', 'owner']} />}>
          <Route path='/userProfile' element={<UserProfile />} />
          <Route path='/project-details/:id' element={<ProjectDetails />} />
          <Route path='/businessCatalog' element={<BusinessCatalog />} />
        </Route>
        <Route element={<RequireAuth allowedRoles={['admin', 'company']} />}>
          <Route path='/marketplace/:id' element={<ProjectDetails />} />
          <Route path='/companyProfile' element={<CompanyProfile />} />
        </Route>
        <Route path='/unauthorized' element={<Unauthorized />} />
      </Route>
    </Route>

    <Route element={<RequireAuth allowedRoles={['admin']} />}>
      <Route path='/admin' element={<Admin />} />
      <Route path='/admin/users' element={<Users />} />
      <Route path='/admin/companies' element={<Companies />} />
    </Route>
  </>
);

export default routes;
