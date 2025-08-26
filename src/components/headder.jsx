import "./headder.css";
import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { MdOutlineConnectWithoutContact } from "react-icons/md";
import { FaChartLine } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineWork } from "react-icons/md";
const Headder = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <div className="headder">
      <div className="logo">Yashu</div>

      <div className="threelines" onClick={toggleMenu}>
        <GiHamburgerMenu />
      </div>
      <nav className={menuOpen ? "navactive" : "nav"}>
        <ul>
          <li onClick={toggleMenu}><a href="#home"><FaHome /> Home</a></li>
          <li onClick={toggleMenu}><a href="#about"><IoPerson /> About</a></li>
          <li onClick={toggleMenu}><a href="#project"><FaChartLine /> Projects</a></li>
          <li onClick={toggleMenu}><a href="#experience"><MdOutlineWork />Experience</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Headder;
