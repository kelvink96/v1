import './App.css'
import {MantineProvider} from "@mantine/core";
import {RouterProvider,} from "react-router-dom";
import {theme} from "./theme";
import {router} from "./routes";
import {LatoFont} from "./fonts/Lato";
import {Helmet} from "react-helmet";

function App() {
    return (
        <>
            <Helmet>
                <title>Kelvin Kiprop</title>
                <link rel="icon" type="image/png" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta property="og:title" content="Kelvin Kiprop"/>
                <meta property="og:site_name" content="Kelvin kiprop portfolio"/>
                <meta property="og:url" content="https://kelvinkiprop.netlify.app/"/>
                <meta
                    property="og:description"
                    content="Kelvin Kiprop's portfolio showcases his skills as a software developer and UI/UX designer. Check out his projects to see his impressive work and get inspired."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/favicon-32x32.png"/>
            </Helmet>
            <MantineProvider theme={theme}>
                <LatoFont/>
                <RouterProvider router={router}/>
            </MantineProvider>
        </>
    )
}

export default App
