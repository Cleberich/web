import { useAuth } from "../../hooks/useAuth";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const auth = useAuth();

  const handleGoogle = (e) => {
    e.preventDefault();
    try {
      auth.loginWithGoogle();
    } catch (error) {
      console.log(error);
    } finally {
      router.push("/cpanel/consulta");
    }
  };

  return (
    <div className="bg-[#1a047d] w-full h-screen grid place-content-center items-center">
      <div className="bg-[#ffffff] rounded-[20px] w-[100%] md:w-[500px] h-[350px] mx-auto shadow-xl">
        {" "}
        <div className="flex flex-col justify-center px-14">
          <h1 className="text-[#171819] text-3xl font-semibold mt-12 text-center">
            Inicia sesión
          </h1>

          <h2 className="text-[#191e21] text-md md:text-xl font-semibold mt-1 text-center">
            Para ver tus contactos
          </h2>
          <img src="/img/google.jpeg" className="w-32 mx-auto" />
          <button
            className="w-full md:w-64 mt-12 py-4 mx-auto bg-red-800 hover:bg-red-600 text-white rounded-lg"
            onClick={(e) => handleGoogle(e)}
          >
            Click para ingresar
          </button>
          <h3 className="text-xs text-black text-center mt-2">
            Desarrollado por Cleber Davila
          </h3>
        </div>
      </div>
    </div>
  );
}
