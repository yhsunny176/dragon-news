import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
    const { signInUser } = use(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const handleSignIn = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const pass = form.password.value;
        signInUser(email, pass)
        .then(() => {
            navigate(`${location.state? location.state : "/"}`)
        })
        .catch((error)=>{
          const errorMessage = error.message;
          alert(errorMessage);
        })
    };
    return (
        <div className="card bg-base-100 w-full max-w-xl h-auto mt-30 shrink-0 shadow-2xl">
            <div className="card-body justify-center">
                <h1 className="text-3xl text-blk-txt-primary font-bold w-max mx-auto">Login Your Account</h1>
                <hr className="border-t border-gray-300 my-8" />

                <form onSubmit={handleSignIn} className="space-y-4">
                    <div className="flex flex-col gap-3">
                        <label className="label">Email</label>
                        <input name="email" type="email" className="input w-full" placeholder="Email" />
                    </div>

                    <div className="flex flex-col gap-3">
                        <label className="label">Password</label>
                        <input name="password" type="password" className="input w-full" placeholder="Password" />
                    </div>
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn btn-neutral w-full">
                        Login
                    </button>

                    <p>
                        Don't have an account?{" "}
                        <Link className={"text-center text-red-400"} to={"/auth/register"}>
                            Register
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
