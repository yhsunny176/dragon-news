import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();
    const activeBtnStyle = ({ isActive }) =>
        `px-3 py-2 text-base ${isActive ? "text-blk-primary font-bold" : "hover:bg-gray-200 rounded-xl"}`;

    const handleLogout = () => {
        logOut()
        .then(() => {
          alert('Successfully Logged Out');
          navigate("/auth/login");

        })
        .catch((error)=>{
          const errorMessage = error.message;
          alert(errorMessage)
        })
    };

    return (
        <div className="flex max-w-full items-center py-6 h-32">
            {/* <div>{user && user.email}</div> */}
            <ul className="flex w-9/10 ml-20 justify-center items-center gap-5">
                <NavLink className={activeBtnStyle} to={"/"}>
                    Home
                </NavLink>
                <NavLink className={activeBtnStyle} to={"/about"}>
                    About
                </NavLink>
                <NavLink className={activeBtnStyle} to={"/career"}>
                    Career
                </NavLink>
            </ul>

            <div className="w-max justify-end">
                {user ? (
                    <button type="button" className="py-3 px-5 text-white bg-blk-txt-primary cursor-pointer" onClick={handleLogout}>
                        Logout
                    </button>
                ) : (
                    <Link className="py-3 px-5 text-white bg-blk-txt-primary" to={"/auth/login"}>
                        Login
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
