import { Link } from "react-router-dom";
import CountryCard from "./CountryCard";
import { useSelector } from "react-redux";

const CountriesList = () => {
  const { countries } = useSelector((state) => state.countries);
  const { region } = useSelector((state) => state.region);

  return (
    <ul className="flex flex-wrap justify-center gap-4 sm:justify-between">
      {(region
        ? countries.filter((country) => country.region == region)
        : countries
      ).map((country, index) => (
        <li key={index}>
          <Link to={country.alpha3Code}>
            <CountryCard
              flag={country.flags.png}
              name={country.name}
              population={country.population}
              capital={country.capital}
              region={country.region}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CountriesList;
