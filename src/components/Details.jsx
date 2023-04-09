import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import DetailsInfo from "../components/DetailsInfo";
import { useSelector } from "react-redux";

const Details = () => {
  const { id } = useParams();
  const [country, setCountry] = useState();
  const { countries } = useSelector((state) => state.countries);

  useEffect(() => {
    const currentCountry = countries.find(
      (country) => country.alpha3Code === id.toUpperCase()
    );
    setCountry(currentCountry);
  }, [setCountry, id, countries]);

  return (
    <>
      <div className="pt-4 pb-10">
        <BackButton />
      </div>
      {!country ? (
        <p>Not country</p>
      ) : (
        <div className="gap-20 lg:flex lg:justify-between">
          <div className="w-full mb-4 shadow h-fit md:flex-1">
            <img src={country?.flags.png} alt="" className="w-full " />
          </div>
          <DetailsInfo country={country} />
        </div>
      )}
    </>
  );
};

export default Details;
