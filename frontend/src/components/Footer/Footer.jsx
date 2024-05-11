import React from "react";
import "./Footer.css";
import logo from "../../assets/logo.svg";
import copyright from "../../assets/copyright_icon.svg";
import insta from "../../assets/instagram_icon.svg";
import linkedin from "../../assets/linkedin_icon.svg";
import whatsapp from "../../assets/whatsapp_icon.svg";
import facebook from "../../assets/facebook_icon.svg";
import twitter from "../../assets/twitter_icon.svg";

export default function Footer() {
  return (
    <div className="flex flex-wrap justify-between h-1/4 pt-8 bg-blue-400 dark:bg-slate-800 bg-opacity-20">
      <div className="left relative left-16 mb-20 flex flex-col space-y-4">
        <div className="">
          <a href="">
            <img src={logo} alt="" />
          </a>
        <div className="flex items-center mt-4">
        <span className="text-gray-600 dark:text-white/50">© copyright 2024, HackHive</span>
        </div>
        </div>
        <div>
        <h1 className="text-black dark:text-white font-semibold font-nunito-sans text-4xl leading-normal tracking-wider">
          Empowering <span className="text-blue-500">Innovators</span>,
        </h1>
        <h1 className="text-black dark:text-white font-semibold font-nunito-sans text-4xl leading-normal tracking-wider">
          Elevating <span className="text-orange-400">Software</span>.
        </h1>
        </div>
        <div className="flex items-center space-x-2">
          <a href="" className="border border-black dark:border-white rounded-full p-1">
            <img src={insta} alt="" className="w-9 h-9 dark:bg-white dark:rounded-full" />
          </a>
          <a href="" className="border border-black dark:border-white rounded-full p-1">
            <img src={linkedin} alt="" className="w-9 h-9 dark:bg-white dark:rounded-full" />
          </a>
          <a href="" className="border border-black dark:border-white rounded-full p-1">
            <img src={whatsapp} alt="" className="w-9 h-9 dark:bg-white dark:rounded-full" />
          </a>
          <a href="" className="border border-black dark:border-white rounded-full p-1">
            <img src={facebook} alt="" className="w-9 h-9 dark:bg-white dark:rounded-full" />
          </a>
          <a href="" className="border border-black dark:border-white rounded-full p-1">
            <img src={twitter} alt="" className="w-9 h-9 dark:bg-white dark:rounded-full"/>
          </a>
        </div>
      </div>
      <div className="right flex relative mr-12 ml-8 mb-6">
        <div className="mx-12 space-y-3 ">
          <h1 className="text-gray-600 font-medium font-sans text-lg dark:text-white/50">COMMUNITY</h1>
          <div className="space-y-1.5 text-gray-600 dark:text-white/30">
          <p>Organize a hackathon</p>
          <p>Explore hackathons</p>
          <p>Code of conduct</p>
          <p>Brand Assets</p>
          </div>
        </div>
        <div className="mx-12 space-y-3">
          <h1 className="text-gray-600 font-medium font-sans text-lg dark:text-white/50">COMPANY</h1>
          <div className="space-y-1.5 text-gray-600 dark:text-white/30">
          <p>About</p>
          <p>Jobs</p>
          <p>Blogs</p>
          <p>Changeloge</p>
          <p>Privacy</p>
          <p>Terms</p>
          </div>
        </div>
        <div className="mx-12 space-y-3">
          <h1 className="text-gray-600 font-medium font-sans text-lg dark:text-white/50">SUPPORT</h1>
          <div className="space-y-1.5 text-gray-600 dark:text-white/30">
          <p>Help</p>
          <p>Refund Policy</p>
          <p>Status</p>
          <p>Contact Us</p>
          </div>
        </div>
      </div>
    </div>
  );
}
