import React from 'react'
import { Link } from 'react-router-dom'
import { ImSearch } from "react-icons/im";
import "./Header.scss"

import logo  from "../../logo.png"
const Header = () => {
  return (
 <nav className="header">
<img src={logo} alt="" />
<div>
  <Link to="/tvshows">Tv Shows</Link>
  <Link to="/movies">Movies</Link>
  <Link to="/recent">Recently Added</Link>
  <Link to="/mylist">My List</Link>
</div>
<ImSearch />
 </nav>
  )
}

export default Header
