import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
  const activeBtnStyle = ({ isActive }) =>
    `px-3 py-2 text-base ${
        isActive ? "text-blk-primary font-bold" : "hover:bg-gray-200 rounded-xl"
    }`;

  return (
    <div className='flex max-w-full items-center py-6 h-32'>
      <ul className='flex w-9/10 ml-20 justify-center items-center gap-5'>
        <NavLink className={activeBtnStyle} to={"/"}>Home</NavLink>
        <NavLink className={activeBtnStyle} to={"/about"}>About</NavLink>
        <NavLink className={activeBtnStyle} to={"/career"}>Career</NavLink>
      </ul>

      <div className='w-max justify-end'>

        <Link className='py-3 px-5 text-white bg-blk-txt-primary' to={"/login"}>Login</Link>
      </div>
    </div>
  );
};

export default Navbar;