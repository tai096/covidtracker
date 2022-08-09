export default function HightlightGlobal(props) {
  return (
    <>
      {/* Quốc Gia */}
      <div className="flex flex-col justify-around">
        <h1 className="mx-16 font-bold text-3xl text-center lg:text-left text-green-900">
          Thế Giới
        </h1>
        <div className="flex flex-wrap my-16 justify-around items-center">
          <div className=" w-64 h-50 bg-zinc-300 bg-opacity-70 text-center rounded-3xl">
            <p className="bg-yellow-300 font-bold  py-5  ">Tổng Số Ca Nhiễm</p>
            <p className="my-16 text-3xl ">
              {props.totalConfirmed
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
          </div>
          <div className=" w-64 h-50 bg-zinc-300 my-10 bg-opacity-70 text-center rounded-3xl">
            <p className="bg-red-400 font-bold  py-5  ">Tổng Số Ca Tử Vong</p>
            <p className="my-16 text-3xl ">
              {props.totalDeaths
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
          </div>
          <div className=" w-64 h-50 bg-zinc-300 bg-opacity-70 text-center rounded-3xl">
            <p className="bg-orange-400 font-bold  py-5  ">Số Ca Tử Vong Mới</p>
            <p className="my-16 text-3xl ">
              {props.newDeaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
