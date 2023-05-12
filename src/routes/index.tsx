import {createBrowserRouter,} from "react-router-dom";
import {Error404Page, HomePage} from "../pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage/>,
        errorElement: <Error404Page/>
    },
]);
