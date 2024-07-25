import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./routes/Home";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./routes/Dashboard";
import SignInPage from "./routes/SignInPage";
import SignUpPage from "./routes/SignUpPage";
import Chat from "./routes/Chat";

const App = () => {
  const router = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/sign-in/*",
          element: <SignInPage/>,
        },
        {
          path: "/sign-up/*",
          element: <SignUpPage/>,
        },
        {
          element: <DashboardLayout />,
          children: [
            {
              path: "/dashboard",
              element: <Dashboard />,
            },
            {
              path: "/dashboard/chats/:id",
              element: <Chat />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
