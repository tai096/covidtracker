import "./style.css";

export default function Loading() {
  return (
    <div className="flex justify-between items-center flex-col">
      <div class="loader">
        <div class="outer"></div>
        <div class="middle"></div>
        <div class="inner"></div>
      </div>
      <p className="text-4xl font-bold text-rose-400">Loading...</p>
    </div>
  );
}
