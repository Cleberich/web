import Footer2 from "./Footer2";
import Nav from "./Nav";

const Layout2 = ({ children }) => {
  return (
    <>
      <Nav />
      {children}
      <Footer2 />
    </>
  );
};

export default Layout2;
