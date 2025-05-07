import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../provider/AuthProvider";

const Register = () => {
  const {createUser, setUser} = use(AuthContext);
  const navigate = useNavigate();
    const handleRegister = (e) => {
        e.preventDefault()

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,photo,email,password);
        createUser(email, password)
        .then(result => {
          const user = result.user;
          setUser(user);
          navigate("/");

        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
        });

    };
    return (
        <div>
            <div className="card bg-base-100 w-xl h-auto shrink-0 shadow-2xl">
                <div className="card-body justify-center py-16 px-16">
                    <h1 className="text-3xl text-blk-txt-primary font-bold w-max mx-auto">Register Your Account</h1>
                    <hr className="border-t border-gray-300 my-8" />

                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="flex flex-col gap-3">
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input w-full" placeholder="Enter your name" required/>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="label">Photo URL</label>
                            <input name="photo" type="text" className="input w-full" placeholder="Enter Photo URL" required/>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="label">Email</label>
                            <input name="email" type="email" className="input w-full" placeholder="Email" required/>
                        </div>

                        <div className="flex flex-col gap-3">
                            <label className="label">Password</label>
                            <input name="password" type="password" className="input w-full" placeholder="Password" required/>
                        </div>

                        <button type="submit" className="btn btn-neutral w-full">
                            Register
                        </button>

                        <p>
                            Already have an account?{" "}
                            <Link className={"text-center text-red-400"} to={"/auth/login"}>
                                Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
