import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const SocialLogin = () => {
    return (
        <div className="border-1 border-gray-200 py-3 px-4">
            <h2 className="font-bold text-lg text-blk-txt-primary">Login with</h2>
            <div className="*:border-1 space-y-3 mt-4 *:cursor-pointer">
                <button
                    type="button"
                    className="w-full btn btn-outline">
                    <FcGoogle size={24}/>
                    Login with Google
                </button>
                <button
                    type="button"
                    className="w-full btn btn-outline">
                    <FaGithub size={24}/>
                    Login with Github
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;
