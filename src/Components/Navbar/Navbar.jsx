import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
  const activeBtnStyle = ({ isActive }) =>
    `px-3 py-2 text-base ${
        isActive ? "text-blk-primary font-bold lg:border-b-2 border-blk-primary" : "hover:bg-gray-200 rounded-xl"
    }`;

  return (
    <div className='max-w-8/10 mx-auto py-8'>
      <ul className='flex justify-center items-center gap-5'>
        <NavLink className={activeBtnStyle} to={"/"}>Home</NavLink>
        <NavLink className={activeBtnStyle} to={"/about"}>About</NavLink>
        <NavLink className={activeBtnStyle} to={"/career"}>Career</NavLink>
      </ul>
    </div>
  );
};

export default Navbar;