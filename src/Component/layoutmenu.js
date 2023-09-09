import Layoutmanu from "./layoutmainmenu";

const layoutmenu = ({ children }) => {
  return (
    <>
      <Layoutmanu />
      <main>{children}</main>
    </>
  );
};

export default layoutmenu;