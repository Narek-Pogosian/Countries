import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="py-10 text-center dark:text-white text-lightText">
      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="mb-10 text-2xl">Page not found</h2>
      <Link
        to="/"
        className="px-5 py-2 font-bold bg-white rounded shadow-md text-lightText dark:text-white dark:bg-darkElement"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NoPage;
