import Link from "next/link";
import { useState } from "react";
import { AiOutlineInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

const Nav = () => {
  const [menu, setMenu] = useState(false);
  const abrir = () => {
    setMenu(!menu);
  };
  return (
    <>
      <div className="bg-transparent md:px-24 rounded-b-3xl h-[70px] bg-contain  sticky top-0 caja ">
        {" "}
        <nav className="  px-2 sm:px-4  ">
          <div className="container flex flex-wrap items-center justify-between mx-auto ">
            <div className="">
              <Link href="/" className="flex items-center">
                <img
                  src="/img/logonuevo.png"
                  className="mr-3 -mt-3 logoNav "
                  alt="Actitud Logo"
                />
              </Link>
            </div>
            <div>
              {" "}
              <button
                type="button"
                className="block botonAbrirMenu py-2 px-3 pr-4 text-white bg-transparent rounded-lg  "
                onClick={() => abrir()}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </button>
            </div>

            <div
              className="items-center justify-between w-full md:flex md:w-auto md:order-1  "
              id="navbar-cta"
            >
              <ul className="flex flex-col p-4 mt-4 contactoNav  border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
                <li>
                  <Link
                    href="/contacto"
                    className="block py-2 px-3 pr-4 text-white bg-blue-700 rounded-lg  heartbeat"
                  >
                    CONTACT
                  </Link>
                </li>
                <li>
                  <button
                    type="button"
                    className="block py-2 px-3 pr-4 botonNav text-white bg-transparent rounded-lg  "
                    onClick={() => abrir()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {menu && (
        <div
          id="authentication-modal"
          tabindex="-1"
          aria-hidden="true"
          className="fixed top-0 left-0 right-0 z-[1000] visible w-full overflow-x-hidden overflow-y-auto inset-0 h-modal h-full"
        >
          <main
            className={
              menu &&
              "h-screen w-full bg-black fixed z-50 -top-0 hvr-shutter-in-vertical overflow-hidden"
            }
          >
            <div className="flex justify-between">
              <div className="pl-12 pt-5">
                <Link href="/" className="flex items-center">
                  <img
                    src="/img/logonuevo.png"
                    className=" logoNav"
                    alt="Actitud Logo"
                  />
                </Link>
              </div>
              <div>
                {" "}
                <button
                  type="button"
                  className="block p-2 mt-12 mr-12 text-white bg-black rounded-full "
                  onClick={() => setMenu(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="items-center text-center justify-center w-full flex   "
              id="navbar-cta"
            >
              <ul className="flex flex-col p-4  border-gray-100 rounded-lg bg-transparent  mt-0 text-sm font-medium border-0">
                <li>
                  <Link
                    href="/nosotros"
                    className="block  py-2 text-7xl font-[900] linkMenu my-2 text-white  rounded px-2 hvr-sweep-to-right "
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/works"
                    className="block  py-2 text-7xl font-[900] linkMenu my-2 text-white  rounded px-2 hvr-sweep-to-right "
                  >
                    Work
                  </Link>
                </li>
                <li>
                  <Link
                    href="/servicios"
                    className="block py-2 text-7xl font-[900] linkMenu my-2 text-white  rounded px-2  hvr-sweep-to-right"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contacto"
                    className="block py-2 px-3 pr-4 text-7xl font-[900] linkMenu my-2 text-white bg-blue-700 hover:bg-white hover:text-blue-700 rounded-lg  heartbeat"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center gap-3 cajaIconos ">
              <Link href="https://instagram.com/actitud.uy?igshid=NDk5N2NlZjQ=">
                <AiOutlineInstagram className="text-white text-2xl md:text-4xl hover:text-blue-600" />
              </Link>
              <Link href="https://www.linkedin.com/company/actituduy/about/?viewAsMember=true">
                <FaLinkedinIn className="text-white text-2xl md:text-4xl hover:text-blue-600" />
              </Link>
            </div>
          </main>
        </div>
      )}
    </>
  );
};

export default Nav;
