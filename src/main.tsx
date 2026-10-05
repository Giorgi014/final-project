import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Portfolio from "@/pages/Portfolio";
import Services from "@/pages/Services";
import Project from "@/pages/Project";
import ErrorPage from "./pages/ErrorPage";
import ErrorLayout from "./layouts/ErrorPageLayout";
import Auth from "./pages/Auth";
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
    path: "*",
    element: <ErrorLayout />,
    children: [
      { path: "*", element: <ErrorPage /> },
      { path: "auth", element: <Auth /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
