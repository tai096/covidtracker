import { Link } from "react-router-dom";
import logo from "../../assets/img/Logo.png";

export default function NavBar() {
  return (
    <>
      <div class="py-7 px-20 flex items-center justify-between">
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
            Số liệu
          </Link>
        </div>
      </div>
    </>
  );
}
