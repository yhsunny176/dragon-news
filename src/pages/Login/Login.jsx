import React from "react";
import { Link } from "react-router";

const Login = () => {
    return (
        <div className="card bg-base-100 w-full max-w-xl h-auto mt-30 shrink-0 shadow-2xl">
            <div className="card-body justify-center">
               <h1 className="text-3xl text-blk-txt-primary font-bold w-max mx-auto">Login Your Account</h1>
               <hr className="border-t border-gray-300 my-8" />

                <form className="space-y-4">
                    <div className="flex flex-col gap-3">
                        <label className="label">Email</label>
                        <input type="email" className="input w-full" placeholder="Email" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="label">Password</label>
                        <input type="password" className="input w-full" placeholder="Password" />
                    </div>
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral w-full">Login</button>

                    <p>Don't have an account? <Link className={"text-center text-red-400"} to={"/auth/register"}>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;
