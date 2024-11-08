import { useState } from "react";
import Footer from "../../../components/layout/Footer";
import CompaniesTable from "./components/CompaniesTable";
import Sidebar from "../components/Sidebar";

function Companies() {
  const [reset, setReset] = useState(false);

  return (
    <div className="flex flex-col min-h-screen">
      <Sidebar />
      <div className="flex-grow h-full m-10 shadow-lg">
        <div className="">
          
        </div>
        <div className="h-full">
          <CompaniesTable reset={reset} setReset={setReset} />
        </div>
      </div>
      <Footer className="mt-auto" />
    </div>
  );
}

export default Companies;
