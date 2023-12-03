import Signin from "../Kanbas/Users/signin";
import Account from "../Kanbas/Users/account";
import { Routes, Route, Navigate } from "react-router-dom";
import UserTable from "../Kanbas/Users/table";
import Signup from "../Kanbas/Users/signup";
import Nav from "./Nav";
function Project() {
  return (
    <div className="row">
      <div className="col-2">
        <Nav />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Navigate to="/project/home" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
          <Route path="/account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
        </Routes>
      </div>
    </div>
  );
}
export default Project;
