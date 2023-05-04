import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { fetchCountries } from "./redux/countriesSlice";
import Header from "./components/Header";
import Home from "./components/Home";
import Details from "./components/Details";
import NoPage from "./components/NoPage";

const App = () => {
  const { isDarkMode } = useSelector((state) => state.darkMode);
  const dispatch = useDispatch();
  console.log(localStorage.getItem("darkMode"));
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  return (
    <div className={`app ${isDarkMode && "dark"}`}>
      <div className="min-h-full bg-lightBg dark:bg-darkBg">
        <Header />
        <div className="container py-4">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/:id" element={<Details />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
