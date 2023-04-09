import lightMoon from "../assets/lightMoon.svg";
import darkMoon from "../assets/darkMoon.svg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../redux/darkModeSlice";

const Header = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();

  return (
    <header className="py-4 bg-white shadow-md dark:bg-darkElement">
      <div className="container flex items-center justify-between text-lightText dark:text-white">
        <Link to="/" className="text-sm font-bold sm:text-lg ">
          Where in the world?
        </Link>
        <button
          className="flex items-center gap-1"
          onClick={() => dispatch(toggleDarkMode())}
        >
          <img src={isDarkMode ? darkMoon : lightMoon} alt="Moon" />
          <span className="text-xs tracking-wider sm:text-sm">Dark Mode</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
