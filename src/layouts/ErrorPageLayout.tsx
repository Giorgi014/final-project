import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components";
import { Loader } from "@/components/ui/Loader";

const ErrorLayout = () => (
  <>
    <Header />
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </>
);

export default ErrorLayout;
