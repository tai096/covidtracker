export default function CountrySelector(props) {
  return (
    <select>
      {props.countries &&
        props.countries.map((country) => <option>{country.Country}</option>)}
    </select>
  );
}
