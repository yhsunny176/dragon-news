import React from "react";
import { Outlet, useNavigation } from "react-router";
import LeftAside from "./LeftAside";
import RightAside from "./RightAside";
import Header from "../../Components/header/Header";
import Marquee from "react-fast-marquee";
import Navbar from "../../components/Navbar/Navbar";
import Loading from "../../pages/Loading/Loading";

const Home = () => {
    const { state }= useNavigation();
    return (
        <div className="w-full">
            {/* Header  */}
            <header>
                <Header></Header>
                <div className="max-w-11/12 mx-auto bg-light-gray py-3 px-3 w-full flex gap-5">
                    <button type="button" className="bg-velvet-red py-3 px-6 text-white">
                        Latest
                    </button>
                    <Marquee className="text-blk-txt-primary font-semibold">
                        Match Highlights: Germany vs Spain — as it happened ! Match Highlights: Germany vs Spain — as it
                        happened
                    </Marquee>
                </div>
                <nav className="max-w-11/12 mx-auto">
                    <Navbar></Navbar>
                </nav>
            </header>

            <main className="grid grid-cols-12 gap-5 w-11/12 mx-auto">
                {/* Left Navigation */}
                <aside className="left-side col-span-3">
                    <LeftAside></LeftAside>
                </aside>

                {/* Main Section */}
                <section className="main col-span-6">
                    { state == "loading" ? <Loading></Loading> : <Outlet></Outlet> }
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
