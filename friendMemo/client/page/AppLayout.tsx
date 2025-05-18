import Header from "../component/util/Header";
import { Outlet } from "react-router";
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <div className="main">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AppLayout;
