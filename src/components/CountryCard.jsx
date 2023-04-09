const CountryCard = ({ flag, name, population, region, capital }) => {
  return (
    <div
      className="w-56 overflow-hidden bg-white rounded shadow dark:bg-darkElement dark:text-white"
      title={name}
    >
      <img src={flag} alt="" className="w-full h-36" />
      <div className="p-4">
        <p className="mb-2 text-lg font-bold truncate">{name}</p>
        <p className="text-sm">
          <b>Population:</b> {population}
        </p>
        <p className="text-sm">
          <b>Region:</b> {region}
        </p>
        <p className="text-sm">
          <b>Capital:</b> {capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
