import Header from "../component/util/Header";
import { Outlet } from "react-router";
import Flash from "../component/util/Flash";
const AppLayout = () => {
  return (
    <>
      <Header></Header>
      <div className=" d-flex justify-content-center mt-3">
        <Flash></Flash>
      </div>
      <div className="main">
        <Outlet></Outlet>
      </div>
    </>
  );
};

export default AppLayout;
