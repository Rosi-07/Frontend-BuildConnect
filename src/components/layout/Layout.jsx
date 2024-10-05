import Footer from "./Footer.jsx";
import { Outlet } from "react-router-dom";
import Header from "./Header.jsx";



function Layout() {
  return (
    <div className="w-full min-h-screen">
      <Header />
      <div className="flex-grow w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;


