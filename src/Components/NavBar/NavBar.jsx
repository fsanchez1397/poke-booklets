import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="h-[8vh] lg:h-[10vh] w-full bg-red-200 flex items-center justify-between px-6 lg:px-10 text-xs lg:text-sm">
      <Link to={'/'}><div>Logo</div></Link>
      <div className="flex flex-row">
        <Link to={'/home'}><div className="ml-4 lg:ml-8">Home</div></Link>
        <Link to={'/create'}><div className="ml-4 lg:ml-8">Create</div></Link>
        <Link to={'/'}><div className="ml-4 lg:ml-8">Login</div></Link>
      </div>
    </div>
  );
}
