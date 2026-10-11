import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer, Header } from "@/components";
import { Loader } from "@/components/ui/Loader";

function App() {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
