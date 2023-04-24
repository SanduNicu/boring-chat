import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Provider as ReduxProvider } from "react-redux";
import {
  defaultTheme,
  Provider as SpectrumProvider,
} from "@adobe/react-spectrum";
import { store } from "./redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <SpectrumProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </SpectrumProvider>
    </ReduxProvider>
  </React.StrictMode>
);
