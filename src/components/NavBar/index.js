import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../../assets/img/Logo.png";

export default function NavBar() {
  const [menuMobie, setMenuMobie] = useState(false);
  const [windowWidth, setwindowWidth] = useState(window.innerWidth);

  const detectSize = () => {
    setwindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowWidth]);

  const turnOnMenu = () => {
    setMenuMobie(!menuMobie);
  };

  let navigate = useNavigate();

  return (
    <>
      <div className="py-7 px-9 flex items-center justify-between">
        <img
          onClick={() => {
            navigate("/");
          }}
          src={logo}
          alt="Hình ảnh"
          className="w-32 sm:w-52 cursor-pointer"
        />
        {windowWidth < 769 ? (
          <button
            className="z-20 hover:bg-slate-200 transition duration-300 ease-in-out rounded-full p-3 "
            onClick={turnOnMenu}
          >
            <svg
              fill="#000000"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24px"
              height="24px"
            >
              <path d="M 2 5 L 2 7 L 22 7 L 22 5 L 2 5 z M 2 11 L 2 13 L 22 13 L 22 11 L 2 11 z M 2 17 L 2 19 L 22 19 L 22 17 L 2 17 z" />
            </svg>
          </button>
        ) : (
          <div>
            <Link
              to="/"
              className="text-green-900 font-semibold text-lg transition duration-300 ease-in-out hover:text-rose-400 cursor-pointer"
            >
              Trang Chủ
            </Link>
            <Link
              to="/information"
              className="ml-14 text-green-900 font-semibold text-lg transition duration-300 ease-in-out hover:text-rose-400 cursor-pointer"
            >
              Thông Tin
            </Link>
            <Link
              to="/tracker"
              className="text-green-900 mx-14 font-semibold text-lg transition duration-300 ease-in-out hover:text-rose-400 cursor-pointer"
            >
              Số Liệu Thống Kê
            </Link>
            <Link
              to="/todo_list"
              className="text-green-900 font-semibold text-lg transition duration-300 ease-in-out hover:text-rose-400 cursor-pointer"
            >
              Todo List
            </Link>
          </div>
        )}
      </div>
      {menuMobie ? (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onClick={turnOnMenu}
            className="bg-black fixed top-0 right-0 left-0 bottom-0 bg-opacity-50 z-10"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            className="absolute w-3/5 top-0 bottom-0 left-0 bg-rose-200 bg-opacity-90 flex flex-col text-center z-10"
          >
            <Link
              to="/"
              className="text-green-800  font-semibold text-lg transition duration-500 ease-in-out hover:text-white  hover:bg-rose-500 py-10 cursor-pointer"
            >
              Trang Chủ
            </Link>
            <Link
              to="/information"
              className=" text-green-800  font-semibold text-lg transition duration-500 ease-in-out hover:text-white  hover:bg-rose-500 py-10 cursor-pointer"
            >
              Thông Tin
            </Link>
            <Link
              to="/tracker"
              className="text-green-800  font-semibold text-lg transition duration-500 ease-in-out hover:text-white hover:bg-rose-500 py-10 cursor-pointer"
            >
              Số Liệu Thống Kê
            </Link>
            <Link
              to="/todo_list"
              className="text-green-800  font-semibold text-lg transition duration-500 ease-in-out hover:text-white hover:bg-rose-500 py-10 cursor-pointer"
            >
              Todo List
            </Link>
          </motion.div>
        </>
      ) : (
        <></>
      )}
    </>
  );
}
