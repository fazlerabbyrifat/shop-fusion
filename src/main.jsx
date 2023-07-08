import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthProviders from "./providers/AuthProviders";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProviders>
    <QueryClientProvider client={queryClient}>
      <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
      </React.StrictMode>
    </QueryClientProvider>
  </AuthProviders>
);
