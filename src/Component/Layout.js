import Layoutarea from "./Layoutadmin";

const Layout = ({ children }) => {
  return (
    <>
      <Layoutarea />
      <main>{children}</main>
    </>
  );
};

export default Layout;
