import {  useState } from "react";
import AddCompany from "./components/AddCompany";
import CompaniesTable from "./components/CompaniesTable";
import Sidebar from "../components/Sidebar";

function Companies() {
  const [reset , setReset] = useState(false);
  return (
    <>
    <Sidebar />
    <div className="m-10 shadow-lg">
      <div className="mb-2">
        
      </div>
      <div className="">
        <CompaniesTable reset={reset} setReset={setReset} />
      </div>
    </div>
    </>
  );
}

export default Companies;
