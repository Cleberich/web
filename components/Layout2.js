import Footer2 from "./Footer2";
import Nav from "./Nav";

const Layout2 = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
    </>
  );
};

export default Layout2;
