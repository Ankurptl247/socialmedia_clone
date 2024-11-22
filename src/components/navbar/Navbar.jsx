import "./Navbar.css"
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import { logoImg } from "../../utils";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar flex items-center justify-between px-6 py-3 bg-slate-200 sticky top-0 z-50">
        <div className="left flex justify-between items-center gap-5">
          <Link to="/" style={{ textDecoration: "none" }}>
            <img className="md:w-5 lg:w-28 sm:w-14" src={logoImg}  alt="Logo" />
          </Link>
          <HomeOutlinedIcon />
          <WbSunnyOutlinedIcon />
          <DarkModeOutlinedIcon />
          <GridViewOutlinedIcon />
          <div className="flex justify-center items-center gap-2">
            <SearchOutlinedIcon />
            <input className="w-full border border-gray-300 outline-none hover:border-gray-300  rounded-md px-2 py-2" type="text" placeholder="Search..." />
          </div>
        </div>
        <div className="flex justify-center items-center gap-5">
          <PersonOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsOutlinedIcon />
          <div className="user flex justify-center items-center gap-2">
            <img className="rounded-[50%] bg-slate-500 h-7 w-7" src="" alt="" />
            <span>Ankur Patel</span>            
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
