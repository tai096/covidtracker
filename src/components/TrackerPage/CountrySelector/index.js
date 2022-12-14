export default function CountrySelector(props) {
  return (
    <div className="flex flex-col justify-center items-center lg:ml-10 lg:items-start mb-12">
      <p className="font-bold text-3xl mb-4 text-green-900">Quốc gia</p>
      <select
        className="border-2 w-72 border-gray-500 "
        value={props.value}
        onChange={props.onChange}
      >
        {props.countries &&
          props.countries.map((country) => (
            <option key={country.ISO2} value={country.ISO2}>
              {country.Country}
            </option>
          ))}
      </select>
    </div>
  );
}
