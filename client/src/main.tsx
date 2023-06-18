import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Welcome } from "./components/welcome/Welcome";
import { Provider as ReduxProvider } from "react-redux";
import {
  defaultTheme,
  Provider as SpectrumProvider,
} from "@adobe/react-spectrum";
import { store } from "./redux/store";
import "./styles.scss";
import Chat from "./components/chat/Chat";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Layout from "./components/shared/layout/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/chat",
    element: (
      <Layout>
        <Chat />
      </Layout>
    ),
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
