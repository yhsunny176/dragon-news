import React from "react";
import logo from "../../assets/logo.png";
import { Outlet } from "react-router";
import Navbar from "../../components/Navbar/Navbar";
import { format } from "date-fns";
import Marquee from "react-fast-marquee";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";

const Home = () => {
    return (
        <div className="w-full">
            {/* Header  */}
            <header>
                <div className="max-w-8/10 mx-auto flex flex-col justify-center items-center gap-4 py-12">
                    <img src={logo} alt="Dragon news logo" className="w-sm h-auto" />
                    <span>
                        <p className="text-blk-txt">Journalism without Fear or Favor</p>
                    </span>
                    <p className="font-semibold text-blk-txt-primary">{format(new Date(), "EEEE , MMMM MM , yyyy")}</p>

                    <div className="bg-light-gray py-3 px-3 w-full flex gap-5">
                        <button type="button" className="bg-velvet-red py-3 px-6 text-white">
                            Latest
                        </button>
                        <Marquee className="text-blk-txt-primary font-semibold">
                            Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain —
                            as it happened
                        </Marquee>
                    </div>
                    <nav className="w-full">
                        <Navbar></Navbar>
                    </nav>
                </div>
            </header>

            <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
                {/* Left Navigation */}
                <aside className="left-side col-span-3">
                  <LeftAside></LeftAside>
                </aside>

                {/* Main Section */}
                <section className="main col-span-6">
                    <Outlet></Outlet>
                </section>

                {/* Right Navigation */}
                <aside className="right-side col-span-3">
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;
