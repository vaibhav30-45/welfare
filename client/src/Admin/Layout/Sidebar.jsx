import "./Sidebar.css";

import { NavLink } from "react-router-dom";

import {
  FaHome,
  FaBook,
  FaCalendarAlt,
  FaImages,
  FaDonate,
  FaCog,
  FaSignOutAlt,
  FaBars
} from "react-icons/fa";

import { useState } from "react";

const Sidebar = () => {

  const [collapse,setCollapse]=useState(false);

  return(

<div className={collapse ? "sidebar collapse" : "sidebar"}>

<div className="sidebar-top">

<div className="logo">

<h2>

SAHYOG

</h2>

<span>

Admin Panel

</span>

</div>

<button

className="collapse-btn"

onClick={()=>setCollapse(!collapse)}

>

<FaBars/>

</button>

</div>

<nav>

<ul>

<li>

<NavLink to="/admin">

<FaHome/>

<span>

Dashboard

</span>

</NavLink>

</li>

<li>

<NavLink to="/admin/programs">

<FaBook/>

<span>

Programs

</span>

</NavLink>

</li>

<li>

<NavLink to="/admin/events">

<FaCalendarAlt/>

<span>

Events

</span>

</NavLink>

</li>
<li>

  <NavLink to="/admin/gallery">

    <FaImages />

    <span>

      Gallery

    </span>

  </NavLink>

</li>

<li>

  <NavLink to="/admin/donations">

    <FaDonate />

    <span>

      Donations

    </span>

  </NavLink>

</li>

<li>

  <NavLink to="/admin/settings">

    <FaCog />

    <span>

      Settings

    </span>

  </NavLink>

</li>

</ul>

</nav>

<div className="sidebar-bottom">

<button className="logout-btn">

<FaSignOutAlt />

<span>

Logout

</span>

</button>

</div>

</div>

);

};

export default Sidebar;