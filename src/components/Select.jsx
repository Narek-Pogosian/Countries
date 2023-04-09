import { Listbox, Transition } from "@headlessui/react";
import lightDown from "../assets/lightDown.svg";
import darkDown from "../assets/darkDown.svg";
import { useDispatch, useSelector } from "react-redux";
import { setRegion } from "../redux/regionSlice";

const regions = [
  { id: 0, name: "World", value: null },
  { id: 1, name: "Africa", value: "Africa" },
  { id: 2, name: "Americas", value: "Americas" },
  { id: 3, name: "Asia", value: "Asia" },
  { id: 4, name: "Europe", value: "Europe" },
  { id: 5, name: "Oceania", value: "Oceania" },
];

const Select = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const { region } = useSelector((state) => state.region);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setRegion(e));
  };

  return (
    <>
      <Listbox value={region} onChange={handleChange}>
        <div className="relative w-44 text-lightInput dark:text-darkInput">
          <Listbox.Button className="flex items-center justify-between w-full h-12 pl-4 text-sm text-left bg-white rounded shadow dark:bg-darkElement">
            {region ? region : "Filter by Region"}
            <img
              src={isDarkMode ? darkDown : lightDown}
              alt=""
              className="w-8 h-8 dark:stroke-white"
            />
          </Listbox.Button>
          <Transition
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute w-full py-2 text-sm bg-white rounded shadow top-14 focus:outline-none dark:bg-darkElement">
              {regions.map((region) => (
                <Listbox.Option
                  key={region.id}
                  value={region.value}
                  className={({ active }) =>
                    `cursor-pointer py-1 pl-4 ${
                      active ? "bg-[#f0f0f0] dark:bg-darkBg" : ""
                    }`
                  }
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {region.name}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </>
  );
};

export default Select;
