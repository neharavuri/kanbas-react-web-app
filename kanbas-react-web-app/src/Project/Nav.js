import { Link, useLocation } from "react-router-dom";
function Nav() {
  const { pathname } = useLocation();
  return (
    <nav className="list-group mt-2">
      <Link
        to="/project/signin"
        className="list-group-item"
      >
        Sign In
      </Link>
      <Link
        to="/project/account"
        className="list-group-item"
      >
        Account
      </Link>
      <Link
        to="/project/signup"
        className="list-group-item"
      >
        Sign Up
      </Link>
    </nav>
  );
}
export default Nav;
