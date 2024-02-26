import React from "react";
import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/useAuth";
import Listado from "../../components/Listado";
import { useRouter } from "next/router";

export default function consulta() {
  const auth = useAuth();
  const router = useRouter();
  const { contactados, user, logout } = useAuth();
  const [data, setData] = useState("");
  const getData = () => {
    console.log(user);
    return localStorage.getItem("logeado");
  };
  useEffect(() => {
    setData(getData());
    if (user == null) {
      router.push("/cpanel");
    }
  }, []);

  const handleSalir = () => {
    auth.logout();
  };

  return (
    <div className="bg-[#1a047d] min-h-screen">
      <h2 className="text-center text-white text-4xl py-4">
        Listado de prospectos
      </h2>
      <div className="w-full flex justify-end">
        <button
          className="bg-black rounded-2xl py-2 px-4  mr-20 mb-3 text-white"
          onClick={() => handleSalir()}
        >
          Salir
        </button>
      </div>
      <div className="  pb-12">
        <div className="relative overflow-x-auto rounded-lg px-4 md:px-20 pb-20 ">
          <table className="w-full text-sm text-left text-gray-500  rounded-lg">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  rounded-lg ">
              <tr className="    ">
                <th scope="col" className="px-6 py-3">
                  Nombre
                </th>
                <th scope="col" className="px-6 py-3 md:blo">
                  Teléfono
                </th>
                <th scope="col" className="px-6 py-3">
                  Mensaje
                </th>

                <th scope="col" className="px-6 py-3">
                  Fecha
                </th>
              </tr>
            </thead>

            <tbody>
              {contactados.map((info) => (
                <Listado key={info.id} info={info} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
