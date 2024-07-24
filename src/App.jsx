import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/RootLayout";
import Home from "./routes/Home";
import DashboardLayout from "./layout/DashboardLayout";
import Dashboard from "./routes/Dashboard";
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
