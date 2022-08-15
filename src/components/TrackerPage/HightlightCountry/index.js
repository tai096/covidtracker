export default function HightlightCountry(props) {
  return (
    <>
      {/* Quốc Gia */}
      <div className="flex flex-wrap my-20 justify-around items-center">
        <div className=" w-64 h-50 bg-zinc-300 bg-opacity-70 text-center rounded-3xl">
          <p className="bg-yellow-300 font-bold  py-5  ">Tổng Số Ca Nhiễm</p>
          {props.data &&
            props.data.map((data) => (
              <>
                <p className="my-16 text-3xl " key={data.ID}>
                  {data.Confirmed.toString().replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    "."
                  )}
                </p>
              </>
            ))}
        </div>
        <div className=" w-64 h-50 bg-zinc-300 bg-opacity-70 my-10 text-center rounded-3xl">
          <p className="bg-green-400  font-bold py-5 ">Số Ca Khỏi Trong Ngày</p>
          {props.data &&
            props.data.map((data) => (
              <>
                <p className="my-16 text-3xl " key={data.ID}>
                  {data.Recovered}
                </p>
              </>
            ))}
        </div>
        <div className=" w-64 h-50 bg-zinc-300 bg-opacity-70 text-center rounded-3xl">
          <p className="bg-red-400 font-bold py-5 ">Tổng Số Ca Tử Vong</p>
          {props.data &&
            props.data.map((data) => (
              <>
                <p className="my-16 text-3xl " key={data.ID}>
                  {data.Deaths.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
