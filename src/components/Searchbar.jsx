import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import lightDown from "../assets/lightDown.svg";
import darkDown from "../assets/darkDown.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Searchbar = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const { countries } = useSelector((state) => state.countries);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredCountries =
    query === ""
      ? countries
      : countries?.filter((country) =>
          country.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .startsWith(query.toLowerCase().replace(/\s+/g, ""))
        );

  return (
    <div className="z-50 w-full sm:w-80">
      <Combobox onChange={(value) => navigate(value)}>
        <div className="relative mt-1">
          <div className="relative w-full text-left bg-white rounded shadow cursor-default dark:bg-darkElement sm:text-sm">
            <Combobox.Input
              className="w-full h-12 py-2 pl-4 pr-10 text-sm leading-5 bg-transparent border-none rounded text-lightInput dark:text-white"
              displayValue={(country) => country.name}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search for country..."
              autoComplete="off"
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <img src={isDarkMode ? darkDown : lightDown} alt="" />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options className="absolute w-full py-1 overflow-auto text-base bg-white rounded-md shadow scrollbar-hide top-14 max-h-60 focus:outline-none dark:bg-darkElement sm:text-sm">
              {filteredCountries?.length === 0 && query !== "" ? (
                <div className="relative px-4 py-2 cursor-default select-none text-lightInput dark:text-white">
                  Nothing found.
                </div>
              ) : (
                filteredCountries?.map((country) => (
                  <Combobox.Option
                    key={country.alpha3Code}
                    value={country.alpha3Code}
                    className={({ active }) =>
                      `relative flex cursor-pointer select-none justify-between gap-2 px-2 py-4 text-lightInput dark:text-white ${
                        active
                          ? "bg-[#f0f0f0]  dark:bg-darkBg "
                          : "text-gray-900"
                      }`
                    }
                  >
                    <>
                      <div className="flex items-end gap-2">
                        <img
                          src={country.flags.png}
                          alt=""
                          className="w-8 h-6"
                        />
                        <p className="text-sm font-bold truncate w-36 dark:text-white">
                          {country.name}
                        </p>
                      </div>
                      <p className="self-end text-xs truncate text-lightInput dark:text-darkInput">
                        {country.region}
                      </p>
                    </>
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default Searchbar;
