import { Link, useLocation } from "react-router-dom";
import { BiUserCircle, BiMailSend, BiMoviePlay, BiExit} from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { BsFillCalendar2WeekFill, BsQuestionCircle} from "react-icons/bs";
import {AiFillClockCircle} from "react-icons/ai";
import "./index.css";
function KanbasNavigation() {
  const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];

  const linkToIconMap = {
    Account: <BiUserCircle size={30}/>,
    Inbox: <BiMailSend size={30} className="text-danger"/>,
    History: <AiFillClockCircle size={30} className="text-danger"/>,
    Dashboard: <RiDashboard3Fill size={30} className="text-danger " />,
    Courses: <FaBook size={30} className="kanbas-icon text-danger" />,
    Studio: <BiMoviePlay size={30} className="text-danger"/>,
    Commons: <BiExit size={30} className="text-danger"/>,
    Help: <BsQuestionCircle size={30} className="text-danger"/>,
    Calendar: <BsFillCalendar2WeekFill size={30} className="text-danger" />,
  };

  const { pathname } = useLocation();
  return (
    <div className="list-group wd-kanbas-navigation" style={{width: 110 }}>
      {links.map((link, index) => (
          <Link
            key={index}
            to={`/Kanbas/${link}`}
            className={`list-group-item ${pathname.includes(link) && "active"}`}
          >
            {linkToIconMap[link]}
            <br />
            {link}
          </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;
