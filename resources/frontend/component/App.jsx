
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import DasboardView from "../views/Dashboard/DashboardView";
import Home from "./Home";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
        },

    ]);

    return <RouterProvider router={router} />;
};

export default App;
