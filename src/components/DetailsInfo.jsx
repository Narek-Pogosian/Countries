import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const DetailsInfo = ({ country }) => {
  const { countries } = useSelector((state) => state.countries);

  const findCountryName = (code) => {
    return countries.find((country) => country.alpha3Code === code).name;
  };

  return (
    <div className="dark:text-white md:flex-1">
      <p className="mb-6 text-2xl font-bold">{country?.name}</p>
      <div className="flex flex-col gap-6 mb-8 text-sm sm:flex-row sm:justify-between sm:gap-0">
        <div className="flex flex-col gap-2">
          <p>
            <b>Native Name:</b> {country?.nativeName}
          </p>
          <p>
            <b>Population:</b> {country?.population}
          </p>
          <p>
            <b>Region:</b> {country?.region}
          </p>
          <p>
            <b>Sub Region:</b> {country?.subregion}
          </p>
          <p>
            <b>Capital:</b> {country?.capital}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <b>Top Level Domain:</b> {country?.topLevelDomain[0]}
          </p>
          {country?.currencies && (
            <p>
              <b>Currencies:</b> {country.currencies[0].name}
            </p>
          )}
          <p>
            <b>Languages:</b>{" "}
            {country?.languages.map((language) => language.name).join(", ")}
          </p>
        </div>
      </div>
      <div>
        <div className="mb-2">
          {country?.borders && <b>Border countries: </b>}
        </div>
        <div className="flex flex-wrap gap-2 md:w-96">
          {country?.borders?.map((border) => (
            <Link
              to={`/${border}`}
              key={border}
              className="flex items-center gap-1 px-4 py-1 text-sm bg-white rounded shadow dark:bg-darkElement"
            >
              {findCountryName(border)}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsInfo;
