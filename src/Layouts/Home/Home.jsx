import React from "react";
import logo from "../../assets/logo.png";
import { Outlet } from "react-router";

const Home = () => {
    return (
        <div className="w-full">
            {/* Header  */}
            <header>
                <div className="max-w-8/10 mx-auto flex flex-col justify-center items-center gap-4 py-12">
                    <img src={logo} alt="Dragon news logo" className="w-sm h-auto" />
                    <span><p>Journalism without Fear or Favor</p></span>
                </div>
            </header>

            <main>
                {/* Left Navigation */}
                <section className="left-nav"></section>

                {/* Main Section */}
                <section className="main">
                    <Outlet></Outlet>
                </section>

                {/* Right Navigation */}
                <section className="right-nav"></section>
            </main>
        </div>
    );
};

export default Home;
