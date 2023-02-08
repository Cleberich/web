import React from "react";

const CarrsuselSkeletor = () => {
  return (
    <div
      role="status"
      className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
    >
      <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
        <img src="/img/clientes/2.webp" />
        <img src="/img/clientes/3.webp" />
      </div>

      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default CarrsuselSkeletor;
