import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";

export const Footer = () => {
  return (
    <div className="wrapper h-fit w-[-webkit-fill-available]">
      <div className="bg-blue-950 h-fit w-auto flex flex-row flex-wrap">

        <div className="left flex flex-col w-1/4 px-8 py-8 gap-6">
          <div className="logo text-xl font-bold font-siz text-white text-center">
            EDUCATE
          </div>
          <div className="links flex flex-col gap-3 text-slate-300  justify-center ">

            <div className="email flex flex-row gap-2 justify-center">
              <MdOutlineEmail className="my-1" />
              <Link to="">Email</Link>
            </div>
            <div className="email flex flex-row gap-2 justify-center">
              <MdOutlineEmail className="my-1" />
              <Link to="">Phone</Link>
            </div>
            <div className="email flex flex-row gap-2 justify-center">
              <MdOutlineEmail className="my-1" />
              <Link to="">Privacy policy</Link>
            </div>
          </div>
        </div>

        <div className="left flex flex-col w-1/4 px-8 py-8 gap-6">
          <div className="logo text-xl font-bold font-siz text-white text-center">
            SOCIAL
          </div>
          <div className="links flex flex-col text-center gap-3 text-slate-300">
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>
          </div>
        </div>
        <div className="middle flex flex-col w-1/4 px-8 py-8 gap-6">
          <div className="logo text-xl font-bold font-siz text-white text-center">
            IMPORTANT LINKS
          </div>
          <div className="links flex flex-col text-center gap-3  text-slate-300">
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>
          </div>
        </div>
        <div className="right flex flex-col w-1/4 px-8 py-8 gap-6">
          <div className="logo text-xl font-bold font-siz text-white text-center">
            LINKS
          </div>
          <div className="links flex flex-col text-center gap-3  text-slate-300">
            <a href="https://www.instagram.com/">Instagram</a>
            <a href="https://www.facebook.com/">Facebook</a>
            <a href="https://www.youtube.com/">Youtube</a>
          </div>
        </div>
      </div>
      <div className="copyright bg-blue-950 border-y-2 border-slate-700   text-center  ">
        <p className="text-slate-500 my-1">
          All Content and Intellectual Property is under Copyright Protection |
          myCBSEguide.com ©2007-2024
        </p>
      </div>
    </div>
  );
};