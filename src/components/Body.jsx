import { Outlet } from "react-router";
import Navbar from "./Navbar";

function Body() {
  return (
    <div>
      <Navbar />
      {/* Render any children routes */}
      <Outlet />
    </div>
  );
}

export default Body;
