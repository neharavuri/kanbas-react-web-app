import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Account() {
  const { id } = useParams();
  const [account, setAccount] = useState(null);
  const navigate = useNavigate();
  const save = async () => {
    await client.updateUser(account);
  };
  const fetchAccount = async () => {
    const account = await client.account();
    console.log(account)
    setAccount(account);
  };
  const signout = async () => {
    await client.signout();
    navigate("/project/signin");
  };

  const findUserById = async (id) => {
    const user = await client.findUserById(id);
    setAccount(user);
  };

  useEffect(() => {
    if (id) {
        console.log(id)
      findUserById(id);
    } else {
      fetchAccount();
      console.log("ACCOUNT");
      console.log(account)
    }
  }, []);
  return (
    <div className=" w-50">
      <h1>Account</h1>
      {account && (
        <div className="list-group">
          <input
            className="list-group-item"
            value={account.password}
            onChange={(e) =>
              setAccount({ ...account, password: e.target.value })
            }
          />{" "}
          <br />
          <input
            className="list-group-item"
            value={account.firstName}
            onChange={(e) =>
              setAccount({ ...account, firstName: e.target.value })
            }
          />
          <br />
          <input
            className="list-group-item"
            value={account.lastName}
            onChange={(e) =>
              setAccount({ ...account, lastName: e.target.value })
            }
          />
          <br />
          <input
            className="list-group-item"
            type="date"
            value={account.dob}
            onChange={(e) => setAccount({ ...account, dob: e.target.value })}
          />
          <br />
          <input
            className="list-group-item"
            value={account.email}
            onChange={(e) => setAccount({ ...account, email: e.target.value })}
          />
          <br />
          <select
            className="list-group-item"
            onChange={(e) => setAccount({ ...account, role: e.target.value })}
          >
            <br />
            <option value="USER">User</option>
            <option value="ADMIN">Admin</option>
            <option value="FACULTY">Faculty</option>
            <option value="STUDENT">Student</option>
          </select>
          <br />
          <button className="btn btn-secondary" onClick={save}>
            Save
          </button>
          <button className="btn btn-danger" onClick={signout}>Signout</button>
          <Link to="/project/admin/users" className="btn btn-warning w-100">
            Users
          </Link>
        </div>
      )}
    </div>
  );
}
export default Account;
