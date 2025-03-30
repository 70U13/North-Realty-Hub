
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Home";
import "../../layout/fonts.css";
import "../../layout/app.css";

import Contact from "./Contact";
import HomePage from "./Home";

const App = () => {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
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

    return <RouterProvider router={router} />;
};

export default App;
