
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import "../../layout/fonts.css";
import "../../layout/app.css";

import Layout from "./Layout";
import Contact from "./Contact";
import HomePage from "./Home";
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
        ],
    },
]);

const App = () => {
    return <RouterProvider router={router} />;
};

export default App;
