import { useEffect, useState } from "react";
import AddCompany from "./components/AddCompany";
import CompaniesTable from "./components/CompaniesTable";

function Companies() {
  const [reset , setReset] = useState(false);
  return (
    <div className="m-10 shadow-lg">
      <div className="mb-2">
        <AddCompany reset={reset} setReset={setReset} />
      </div>
      <div className="">
        <CompaniesTable reset={reset} setReset={setReset} />
      </div>
    </div>
  );
}

export default Companies;
