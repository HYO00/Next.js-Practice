import Footer from "./Footer";
import Navbar from "./Navbar";

//rsc
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
