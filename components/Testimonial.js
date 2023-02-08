import React from "react";

const Testimonial = () => {
  return (
    <div className="w-full  rounded-lg">
      <div
        className=" p-4 rounded-lg md:p-8 bg-transparent"
        id="statistics"
        role="tabpanel"
        aria-labelledby="statistics-tab"
      >
        <dl className="flex justify-center gap-24 p-4 mx-auto text-gray-900 sm:grid-cols-3 xl:grid-cols-6 dark:text-white sm:p-8">
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold">73M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Developers
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold">100M+</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Public repositories
            </dd>
          </div>
          <div className="flex flex-col">
            <dt className="mb-2 text-3xl font-extrabold">1000s</dt>
            <dd className="font-light text-gray-500 dark:text-gray-400">
              Open source projects
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default Testimonial;
