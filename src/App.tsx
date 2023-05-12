import './App.css'
import {MantineProvider} from "@mantine/core";
import {RouterProvider,} from "react-router-dom";
import {theme} from "./theme";
import {router} from "./routes";
import {LatoFont} from "./fonts/Lato";

function App() {
    return (
        <>
            <MantineProvider theme={theme}>
                <LatoFont/>
                <RouterProvider router={router}/>
            </MantineProvider>
        </>
    )
}

export default App
