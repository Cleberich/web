import React from "react";

const Listado = ({ info }) => {
  console.log({ info });
  return (
    <tr className="bg-white border-b overflow-x-scroll hover:bg-gray-100">
      <td className="px-6 py-4">{info?.nombre}</td>{" "}
      <td className="px-6 py-4 font-semibold">{info?.telefono}</td>
      <td className="px-6 py-4">{info?.msg}</td>
      <td className="px-6 py-4">{info?.fecha}</td>
    </tr>
  );
};

export default Listado;
