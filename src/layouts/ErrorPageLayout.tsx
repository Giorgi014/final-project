import { Outlet } from "react-router-dom";
import { Header } from "@/components";

const ErrorLayout = () => (
  <>
    <Header />
    <Outlet />
  </>
);

export default ErrorLayout;
