import logo from "../../assets/img/Logo.png";
export default function NavBar(props) {
  return (
    <>
      <div class="py-7 px-20 flex items-center justify-between">
        <img src={logo} />
        <div>
          <a className="text-green-900 font-semibold text-lg hover:text-rose-400 cursor-pointer">
            Trang Chủ
          </a>
          <a className="mx-14 text-green-900 font-semibold text-lg hover:text-rose-400 cursor-pointer">
            Thông Tin
          </a>
          <a className="text-green-900 font-semibold text-lg hover:text-rose-400 cursor-pointer">
            Số liệu
          </a>
        </div>
      </div>
    </>
  );
}
