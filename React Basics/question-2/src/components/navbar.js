import React from "react";
import logo from "./logo.png";
function Navbar(){
    return(
        <>
        <nav className="flex p-4 items-center space-x-[400px] text-lg font-mono border-b border-gray-300">
  <div className="flex items-center space-x-2">
    <img src={logo} alt="logo" className="w-15 h-8" />
    <span className="text-black  font-semibold">Paynet.io</span>
  </div>
  <div className="flex items-center space-x-7 text-black"> 
    <a href="#" >Forms</a>
    <a href="#" >Contents</a>
    <a href="#" >FAQ</a>
    <a href="#" >Contacts</a>
    <a href="#" >About</a>
  </div>
  <div className="flex space-x-7 text-black">
        <a href="#" >Signup</a>
        <a >/</a>
        <a href="#" >Login</a>
      </div>
</nav>

    </>

    );
}
export default Navbar;