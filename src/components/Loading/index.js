import "./style.css";

export default function Loading() {
  return (
    <div className="flex justify-between items-center flex-col">
      <div class="loader">
        <div class="outer"></div>
        <div class="middle"></div>
        <div class="inner"></div>
      </div>
      <p className="text-white text-xl mt-20">Loading...</p>
    </div>
  );
}
