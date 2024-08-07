import { createContext } from "react";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { db } from "../services/firebase";
import {
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../services/firebase/index";
import {
  collection,
  query,
  getDocs,
  orderBy,
  deleteDoc,
  doc,
} from "firebase/firestore";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useRouter();
  const [servicios, setServicios] = useState([]);
  const [user, setuser] = useState(null);
  const [contactados, setcontactados] = useState([]);
  const [activosNoBorrar, setactivosNoBorrar] = useState(null);
  const [denegado, setdenegado] = useState(false);

  const obtenerServicos = async () => {
    const result = await getDocs(query(collection(db, "serviciosNahuel")));
    const adapted = result.docs.map((doc) => {
      const data = doc.data();
      return { ...data, id: doc.id };
    });
    setServicios(adapted);
  };
  useEffect(() => {
    obtenerContactados();
  }, []);
  const loginWithGoogle = async () => {
    try {
      const responseGoogle = new GoogleAuthProvider();
      localStorage.setItem("logeado", responseGoogle);
      await signInWithPopup(auth, responseGoogle);
      router.push("/");
    } catch (error) {
      router.push("/cpnel");
      setdenegado(true);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      localStorage.clear();
    } catch (error) {
      console.log("error al hacer logout");
    } finally {
      setdenegado(false);
      router.push("/");
    }
  };

  const obtenerContactados = async () => {
    try {
      const result = await getDocs(
        query(collection(db, "prospectos"), orderBy("indice", "desc"))
      );
      const adapted = result.docs.map((doc) => {
        const data = doc.data();

        return { ...data, id: doc.id };
      });

      setcontactados(adapted);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        contactados,
        obtenerContactados,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
