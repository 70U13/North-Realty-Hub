
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import "../../layout/fonts.css";
import "../../layout/app.css";

import Layout from "./Layout";
import Contact from "./Contact";
import HomePage from "./Home";
import Properties from "./Properties";
import Services from "./Services";
//import ErrorPage from "./errorElement/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        //errorElement: <ErrorPage />, //added for error page
        children: [ 
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/contact-us",
                element: <Contact />,
            },
            {
                path: "/properties",
                element: <Properties />,
            },
            {
                path: "/services",
                element: <Services />,
            },
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
