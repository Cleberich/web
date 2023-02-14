import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebase";

export default function SendMail(nombre, telefono, msg) {
  const collectionRef = collection(db, "email");
  const emailContent = {
    to: ["pruebasreactjs@gmail.com"],
    message: {
      subject: "PROSPECTO DESDE WEB",
      text: `Nuevo mensaje: `,
      html: `
            <div>
            <h2>Hola Nahuel mi nomnre es ${nombre} </h2>
            <h2>${msg}</h2>
            <p>${telefono}</p>
            <p>Espero tu respuesta</p>
            </div>
            `,
    },
  };
  return addDoc(collectionRef, emailContent);
}
