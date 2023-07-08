import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { newRedirectPath } from "@/app/utils/hrefRedirect";

type Props = {};

export default function ReachButton({}: Props) {
  return (
    <div className="flex flex-row space-x-3">
      <div className="relative group">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
        <button
          onClick={() =>
            newRedirectPath("https://www.linkedin.com/in/alhdringungon/")
          }
          className="relative h-10 px-3 bg-black-normal rounded-lg leading-none flex items-center divide-x divide-white"
        >
          <span className="flex items-center space-x-3">
            <FaLinkedin size={18} className="text-pink-700" />
            <span className="pr-3 text-white group-hover:text-pink-600 text-sm">
              Reach Me on LinkedIn
            </span>
          </span>
          <span className="pl-3 text-sm text-indigo-400 group-hover:text-gray-100 transition duration-200">
            Hire me &rarr;
          </span>
        </button>
      </div>
    </div>
  );
}
