import lightArrow from "../assets/lightArrow.svg";
import darkArrow from "../assets/darkArrow.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BackButton = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const navigate = useNavigate();

  return (
    <button
      className="flex items-center gap-1 px-4 py-1 bg-white rounded shadow dark:bg-darkElement"
      onClick={() => navigate(-1)}
    >
      <img src={isDarkMode ? darkArrow : lightArrow} alt="" />
      <span className="text-sm font-bold text-lightInput dark:text-darkInput">
        Back
      </span>
    </button>
  );
};

export default BackButton;
