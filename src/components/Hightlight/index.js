export default function Highlight(props) {
  return (
    <>
      <div className="flex my-10 justify-around items-center">
        <div className=" w-1/5  h-50 bg-zinc-300 text-center rounded-3xl">
          <p className="bg-yellow-400 font-bold  py-5  ">Số Ca Nhiễm</p>
          {props.data &&
            props.data.map((data) => (
              <>
                <p className="my-16 text-xl " key={data.ID}>
                  {data.Confirmed}
                </p>
              </>
            ))}
        </div>
        <div className=" w-1/5 h-50 bg-zinc-300 text-center rounded-3xl">
          <p className="bg-green-400  font-bold py-5 ">Số Ca Khỏi</p>
          {props.data &&
            props.data.map((data) => (
              <>
                <p className="my-16 text-xl " key={data.ID}>
                  {data.Recovered}
                </p>
              </>
            ))}
        </div>
        <div className=" w-1/5 h-50 bg-zinc-300 text-center rounded-3xl">
          <p className="bg-red-500 font-bold py-5 ">Số Ca Tử Vong</p>
          {props.data &&
            props.data.map((data) => (
              <>
                <p className="my-16 text-xl " key={data.ID}>
                  {data.Deaths}
                </p>
              </>
            ))}
        </div>
      </div>
    </>
  );
}
