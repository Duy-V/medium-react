import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import { ThemeProvider } from "@material-tailwind/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorPage from "./components/ErrorPage.tsx";
import { LoginCard } from "./pages/SignIn.tsx";
import { SignUpCard } from "./pages/SignUp.tsx";
import Root from "./routes/root.tsx";
import ArticleDetails from "./pages/ArticleDetails.tsx";
import { NextUIProvider } from "@nextui-org/react";
import Profile from "./pages/Profile.tsx";
import PostForm from "./components/PostForm.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <App /> },
      {
        path: "/posts/:slug",
        element: <ArticleDetails />,
      },
      {
        path: "/login",
        element: <LoginCard />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/creating-new-post",
        element: <PostForm />,
      },
      {
        path: "/signup",
        element: <SignUpCard />,
      },
      
    ],
  },
]);
const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <NextUIProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <RouterProvider router={router} />
      </ThemeProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </NextUIProvider>
);
