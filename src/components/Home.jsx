import Select from "./Select";
import Searchbar from "../components/Searchbar";
import CountriesList from "./CountriesList";

const Home = () => {
  return (
    <>
      <div className="flex flex-col gap-8 py-4 mb-6 sm:flex-row sm:items-center sm:justify-between">
        <Searchbar />
        <Select />
      </div>
      <CountriesList />
    </>
  );
};

export default Home;
