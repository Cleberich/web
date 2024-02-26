import "../styles/globals.css";
import { AuthProvider } from "../context/AuthProvider";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false);
  useEffect(() => {
    setPaginaLista(true);
  }, []);
  return paginaLista ? (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  ) : null;
}
