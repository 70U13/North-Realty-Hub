
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import "../../layout/fonts.css";
import "../../layout/app.css";

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
