import React from "react";
import { RiSearch2Line } from "react-icons/ri";

const Header = () => {
  return (
    <header>
      {/* Title and search */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-6">
        <div>
          <h1 className="text-2xl text-blue-900">Jeager Resto</h1>
          <p className="text-blue-900">07 octubre 2022</p>
        </div>
        <form>
          <div className="w-full relative ">
            <RiSearch2Line className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-900" />
            <input
              type="text"
              className=" bg-slate-300 w-full py-2 pl-10 pr-4 rounded-lg text-blue-900  outline-none"
              placeholder="Search"
            />
          </div>
        </form>
      </div>
      {/* Tabs */}
      <nav className="text-blue-900 flex items-center justify-between md:justify-start md:gap-8 border-b mb-6">
        <a
          href="#"
          className="relative py-2 pr-4 before:w-1/2 before:h-[2px] before:absolute before:bg-slate-900 before:left-0 before:rounded-full before:-bottom-[1px] text-slate-900"
        >
          Hot dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Cold dishes
        </a>
        <a href="#" className="py-2 pr-4">
          Soup
        </a>
        <a href="#" className="py-2">
          Grill
        </a>
      </nav>
    </header>
  );
};

export default Header;