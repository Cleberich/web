import { useContext } from "react";
import ActitudContext from "../context/ActitudProvider";

const useActitud = () => {
  return useContext(ActitudContext);
};
export default useActitud;
