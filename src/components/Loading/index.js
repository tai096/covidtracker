import "./style.css";

export default function Loading() {
  return (
    <div className="flex justify-between items-center flex-col">
      <div className="loader">
        <div className="outer"></div>
        <div className="middle"></div>
        <div className="inner"></div>
      </div>
      <p className="text-4xl font-bold text-rose-400">Loading...</p>
    </div>
  );
}
