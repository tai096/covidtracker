import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png";

export default function NavBar() {
  return (
    <>
      <div className="py-7 px-20 flex items-center justify-between">
        <img src={logo} />
        <div>
          <Link
            to="/"
            className="text-green-900 font-semibold text-lg transition duration-300 ease-in-out hover:text-rose-400 cursor-pointer"
          >
            Trang Chủ
          </Link>
          <Link
            to="/information"
            className="mx-14 text-green-900 font-semibold text-lg transition duration-300 ease-in-out hover:text-rose-400 cursor-pointer"
          >
            Thông Tin
          </Link>
          <Link
            to="/tracker"
            className="text-green-900 font-semibold text-lg transition duration-300 ease-in-out hover:text-rose-400 cursor-pointer"
          >
            Số liệu Thống Kê
          </Link>
        </div>
      </div>
    </>
  );
}

// import React from "react";
// import {
//   Nav,
//   NavLink,
//   Bars,
//   NavMenu,
//   NavBtn,
//   NavBtnLink,
// } from "./NavbarElements";

// const Navbar = () => {
//   return (
//     <>
//       <Nav>
//         <NavLink to="/">
//           <img src={require("../../image/logo.svg")} alt="logo" />
//         </NavLink>
//         <Bars />
//         <NavMenu>
//           <NavLink to="/about" activeStyle>
//             About
//           </NavLink>
//           <NavLink to="/services" activeStyle>
//             Services
//           </NavLink>
//           <NavLink to="/contact-us" activeStyle>
//             Contact Us
//           </NavLink>
//           <NavLink to="/sign-up" activeStyle>
//             Sign Up
//           </NavLink>
//           {/* Second Nav */}
//           {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
//         </NavMenu>
//         <NavBtn>
//           <NavBtnLink to="/signin">Sign In</NavBtnLink>
//         </NavBtn>
//       </Nav>
//     </>
//   );
// };

// export default Navbar;
