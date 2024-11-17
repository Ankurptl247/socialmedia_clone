import { RiHome5Line } from "react-icons/ri";
import { MdOutlineDarkMode } from "react-icons/md";
import { FaRegCircleUser } from "react-icons/fa6";
import { HiOutlineViewGrid } from "react-icons/hi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { HiOutlineMail } from "react-icons/hi";
import { FiUser } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import "./Navbar.css"
import { logoImg } from "../../utils";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="leftside">
          <img height="100px" width="100px" src={logoImg} alt="" />
          <RiHome5Line />
          <MdOutlineDarkMode />
          <HiOutlineViewGrid />
          <div className="search">
            <IoIosSearch /> 
            <input className="" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="rightside">
          <FiUser />
          <HiOutlineMail />
          <IoIosNotificationsOutline />
        </div>
        <div className="user">
          <img src="" alt="" />
          <FaRegCircleUser />
          <span>Jhon Doe</span>
        </div>
      </div>
    </>
  )
}

export default Navbar
