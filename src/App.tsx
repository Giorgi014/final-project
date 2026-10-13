import { Outlet } from "react-router-dom";
import { Footer, Header, ScrollToTop } from "@/components";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;
