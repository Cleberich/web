import { createContext } from "react";
import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs, query } from "firebase/firestore";

const ActitudContext = createContext();

const ActitudProvider = ({ children }) => {
  const [servicios, setServicios] = useState([]);

  const obtenerServicos = async () => {
    const result = await getDocs(query(collection(db, "serviciosNahuel")));
    const adapted = result.docs.map((doc) => {
      const data = doc.data();
      return { ...data, id: doc.id };
    });
    setServicios(adapted);
  };
  useEffect(() => {
    obtenerServicos();
  }, []);

  return (
    <ActitudContext.Provider value={{ servicios }}>
      {children}
    </ActitudContext.Provider>
  );
};

export { ActitudProvider };
export default ActitudContext;
