import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="flex flex-col items-center mt-24 text-3xl font-semibold">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to="/">
        <button className="btn my-8">Go Back</button>{" "}
      </Link>
    </div>
  );
};

export default ErrorPage;
