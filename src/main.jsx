import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Events from "./pages/Events.jsx";
import AdminPage from "./admin/AdminPage.jsx";
import EventManager from "./admin/event/EventManager.jsx";
import TeamPage from "./pages/TeamPage.jsx";
import { LoginProvider } from "./components/contexts/LoginContext.jsx";
import About from "./pages/About.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/admin/*",
    element: <AdminPage />,
  },
  {
    path: "/manage-events",
    element: <EventManager />,
  },
  {
    path: "/team",
    element: <TeamPage />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/profile",
    element: <ProfilePage />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(


  
  <LoginProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </LoginProvider>
);
