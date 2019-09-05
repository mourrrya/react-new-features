import React from 'react';
import { NavLink, Link } from "react-router-dom"

const Header = () => (
  <header className="bg-red-400 shadow text-white flex flex-row justify-between py-4 px-10 border-b-2 border-red-500">
    <Link to="/" className="cursor-pointer text-white rounded font-medium text-xl py-2 inline-block px-3 italic lowercase"> Learn React </Link>
    <nav className="flex flex-col lg:flex-row justify-center items-center">
      <NavLink to="/new-features" className="font-light" activeClassName="border-b border-white"> New Features </NavLink>
    </nav>
  </header>
)

export default Header;