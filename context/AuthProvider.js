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
    obtenerServicos();
    obtenerContactados();
    const activo = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        console.log("no hay usuario");
        setuser("");
      } else {
        return setuser(currentUser);
      }
      return () => activo();
    });
  }, []);
  const loginWithGoogle = async () => {
    try {
      const responseGoogle = new GoogleAuthProvider();
      localStorage.setItem("logeado", responseGoogle);
      await signInWithPopup(auth, responseGoogle);
      router.push("/cpanel/consulta");
    } catch (error) {
      router.push("/cpanel");
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
      router.push("/cpanel");
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
        servicios,
        contactados,
        obtenerContactados,
        loginWithGoogle,
        user,
        denegado,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
export default AuthContext;
