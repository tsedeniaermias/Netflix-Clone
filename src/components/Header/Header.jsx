import React, { useEffect, useState } from "react";
// import "./header.css";
import NetflixLogo from "../../assets/Images/NetflixLogo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneRoundedIcon from "@mui/icons-material/NotificationsNoneRounded";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import NavBar from "../Nav/Nav";
import "../Nav/Nav.css"

const Header = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
  }, []);
  return (
    <div className={`header_outer_container ${show && "nav_black"}`}>
      <div className="header_container">
        <div className="browse">
        <NavBar/>
          </div>
        <div className="header_left">
          <ul>
            <li>
              <img src={NetflixLogo} alt="Netflix Logo" width="100" />
            </li>
            {/* <li><a href="/home">Home</a></li> */}
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tvshows">TVShows</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
            <li>
              <Link to="/newpopular">New & Popular</Link>
            </li>
            <li>
              <Link to="/mylist">My List</Link>
            </li>
            <li>
              <Link to="/browsebylanguages">Browse by Languages</Link>
            </li>
           
            {/* <li><a href="/tvshows">TVShows</a></li>
            <li> <a href="/movies">Movies</a> </li>
            <li> <a href="/new&popular">New & Popular</a> </li>
            <li> <a href="/mylist">My List</a> </li>
            <li><a href="/browsebylanguages">Browse by Languages</a> </li> */}
          </ul>
        </div>

        <div className="header_right">
          <ul>
            <li>
              <SearchIcon />
            </li>
            <li>
              <NotificationsNoneRoundedIcon />
            </li>
            <li>
              <AccountBoxIcon />
            </li>
            <li>
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
