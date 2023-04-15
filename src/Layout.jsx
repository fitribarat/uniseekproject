import React from "react";
import gambar6 from "./assets/gambar6.png";
import { Link, Outlet } from "react-router-dom";

function Layout() {
    return (
      <body className="m-0 p-0 box-border">
      <header className="m-0 w-11/12 flex justify-between items-center h-20 pr-2.5 pl-2.5"> 
        <h1 className="font-serif text-3xl font-extrabold p-10 text-yellow-950">UNISEEK</h1>
        <nav className="flex items-center">
          <ul className="flex pl-px m-0 gap-4 list-none font-semibold">
            <li className="text-yellow-800">
              <Link to="/">FIND UNIVERSITY </Link>
            </li>
            <li className="text-yellow-800">
              <Link to="/about">ABOUT </Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="relative">
        <div >
          <img className="relative -z-10 w-full bg-top bg-cover border-solid border-2 border-teal-200" src={gambar6}></img>
        </div>
      </main>
      {/* <section className="m-0 flex gap-11 absolute -z-5 p-11 w-4 items-start bg-black"> */}
        <Outlet />
      {/* </section> */}
      </body>
    );
  }
  
  export default Layout;