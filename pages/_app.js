import "../styles/globals.css";
import { ActitudProvider } from "../context/ActitudProvider";
import { useEffect, useState } from "react";
export default function App({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false);
  useEffect(() => {
    setPaginaLista(true);
  }, []);
  return paginaLista ? (
    <ActitudProvider>
      <Component {...pageProps} />
    </ActitudProvider>
  ) : null;
}
