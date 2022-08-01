export default function Header(props) {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var yyyy = today.getFullYear();

  today = "Ngày " + mm + "/" + dd + "/" + yyyy;
  return (
    <div className="flex flex-col items-center justify-center py-14 text-white ">
      <h1 className="text-6xl">Số liệu COVID-19</h1>
      <h3 className="mt-4 text-xl">{today}</h3>
    </div>
  );
}
