import React from "react";
import Button1 from "./Button1";
import Button2 from "./Button2";

function Header() {
  return (
    <div className="bg-neutral-400 px-28 py-2 cursor-pointer">
      <nav className="flex justify-between items-center ">
        <div className="text-sky-200 font-extrabold text-3xl">DAESUNG</div>
        <div>
          <ul className="flex gap-5 text-white text-lg ">
            <li className="hover:text-sky-500 cursor-pointer">Products</li>
            <li className="hover:text-sky-500 cursor-pointer">About Us</li>
            <li className="hover:text-sky-500 cursor-pointer">Blog</li>
            <Button1>Login</Button1>
            <Button1>Contact</Button1>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
