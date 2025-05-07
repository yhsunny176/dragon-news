import React from "react";
import logo from "../../assets/logo.png";
import { format } from "date-fns";

const Header = () => {
    return (
        <div>
            <div className="max-w-8/10 mx-auto flex flex-col justify-center items-center gap-4 py-12">
                <img src={logo} alt="Dragon news logo" className="w-sm h-auto" />
                <span>
                    <p className="text-blk-txt">Journalism without Fear or Favor</p>
                </span>
                <p className="font-semibold text-blk-txt-primary">{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>
            </div>
        </div>
    );
};

export default Header;
