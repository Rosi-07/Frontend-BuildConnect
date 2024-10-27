import UsersTable from "./components/UsersTable";
import AddUser from "./components/AddUser";
import { useState } from "react";
import Sidebar from "../components/Sidebar";

function Users() {
  const [reset, setReset] = useState(false);

  return (
    <>
    <Sidebar />
    <div className="m-10 shadow-lg">
     
      <div className="mb-5">
        <AddUser reset={reset} setReset={setReset} />
      </div>
      <div className="">
        <UsersTable reset={reset} setReset={setReset} />
      </div>
    </div>
    </>
  );
}

export default Users;
