import { Outlet } from "react-router-dom";
import { Header, ScrollToTop } from "@/components";

const ErrorLayout = () => (
  <>
    <Header />
    <Outlet />
    <ScrollToTop />
  </>
);

export default ErrorLayout;
