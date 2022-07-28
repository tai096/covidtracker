export default function CountrySelector(props) {
  return (
    <div className="mx-16 my-12">
      <p className="font-bold text-xl my-4">Quốc gia</p>
      <select className="border-2 border-gray-500 " onChange={props.onChange}>
        {props.countries &&
          props.countries.map((country) => (
            <option className="" key={country.ISO2} value={country.ISO2}>
              {country.Country}
            </option>
          ))}
      </select>
    </div>
  );
}
