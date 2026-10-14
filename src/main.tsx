import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorLayout from "./layouts/ErrorPageLayout";
import { About, Auth, Contact, ErrorPage, Home, Portfolio, Project, Services } from "./pages/lazy";
import { Loader } from "./components/ui/Loader";
import "@/index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "services", element: <Services /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "project", element: <Project /> },
    ],
  },
  {
    element: <ErrorLayout />,
    children: [
      { path: "sign-in", element: <Auth /> },
      { path: "sign-up", element: <Auth /> },
      { path: "*", element: <ErrorPage /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<Loader />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
);
