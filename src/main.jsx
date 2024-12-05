import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./auth/sign-in";
import SignUpPage from "./auth/sign-up";
import HomePage from "./home";
import Dashboard from "./dashboard";
import { ClerkProvider } from "@clerk/clerk-react";
import EditResume from "./dashboard/resume/[resumeId]/edit";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path:'/dashboard/resume/:resumeId/edit',
        element:<EditResume/>
      }
    ],
  },
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "auth/sign-in",
    element: <SignInPage />,
  },
  {
    path: "auth/sign-up",
    element: <SignUpPage />,
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
