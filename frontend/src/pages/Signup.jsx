import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { RiLockPasswordFill } from "react-icons/ri";

export const Signup = () => {
  return (
    <div className="w-full h-full flex justify-center items-center bg-gray-900">
      <div className="flex flex-col justify-center items-center h-[60vh] w-[45vh] bg-slate-300 rounded-md">
        <h1 className="text-2xl mb-4">Sign Up</h1>

        <form action="">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-row items-center gap-4 bg-neutral-200/70 rounded-md px-3 py-1">
              <FaUser />
              <input
                className="py-1 rounded-sm bg-transparent outline-none"
                type="text"
                placeholder="name"
              />
            </div>

            <div className="flex flex-row items-center gap-4 bg-neutral-200/70 rounded-md px-3 py-1">
              <MdEmail />
              <input
                className="py-1 rounded-sm bg-transparent outline-none"
                type="text"
                placeholder="email"
              />
            </div>

            <div className="flex flex-row items-center gap-4 bg-neutral-200/70 rounded-md px-3 py-1">
              <RiLockPasswordLine />
              <input
                className="py-1 rounded-sm bg-transparent outline-none"
                type="text"
                placeholder="password"
              />
            </div>

            <div className="flex flex-row items-center gap-4 bg-neutral-200/70 rounded-md px-3 py-1">
              <RiLockPasswordFill />
              <input
                className="py-1 rounded-sm bg-transparent outline-none"
                type="text"
                placeholder="confirm password"
              />
            </div>
          </div>
        </form>

        <div className="flex flex-col gap-1 mt-2">
          <button className="text-white bg-purple-950 rounded-md py-1 px-5 mx-2 mt-2">
            Sign Up
          </button>
          <p className="text-xs mt-1">
            Already have an account ?{" "}
            <Link to="/login" className="underline text-purple-950">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};