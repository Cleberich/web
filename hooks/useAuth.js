import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    console.log("error de contexto");
  }
  return context;
};
