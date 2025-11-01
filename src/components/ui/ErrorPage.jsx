import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
      <h1 className="text-8xl font-extrabold text-red-700 mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
        Oops! Page not found
      </h2>
      <p className="text-gray-600 mb-8 text-sm md:text-base">
        The page you’re looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="bg-red-700 hover:bg-red-800 text-white px-6 py-3 rounded-lg font-medium transition duration-300"
      >
        Go Back Home
      </Link>
    </section>
  );
};

export default ErrorPage;