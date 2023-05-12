import {BoxProps, Container} from "@mantine/core";
import Wrapper from "../layout";
import HeroSection from "../sections/Home/Hero";
import AboutSection from "../sections/Home/About";
import ExperienceSection from "../sections/Home/Experience";
import ProjectsSection from "../sections/Home/Projects";
import ContactSection from "../sections/Home/Contact";
import {useMediaQuery} from "@mantine/hooks";
import {Helmet} from "react-helmet";

const HomePage = () => {
    const matches = useMediaQuery('(max-width: 1023px)');

    const boxProps: BoxProps = {
        pt: 136,
        pb: 148
    }

    return (
        <Wrapper>
            <Helmet>
                <title>Kelvin Kiprop</title>
                <link rel="icon" type="image/png" href="/favicon.ico"/>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
                <meta property="og:title" content="Kelvin Kiprop"/>
                <meta property="og:site_name" content="Kelvin kiprop portfolio"/>
                <meta property="og:url" content="http://localhost:5173/#about"/>
                <meta
                    property="og:description"
                    content="Kelvin Kiprop's portfolio showcases his skills as a software developer and UI/UX designer. Check out his projects to see his impressive work and get inspired."/>
                <meta property="og:type" content="website"/>
                <meta property="og:image" content="/favicon-32x32.png"/>
            </Helmet>
            <Container sx={{maxWidth: matches ? 800 : 1000}}>
                <HeroSection id="home" {...boxProps}/>
                <AboutSection id="about" {...boxProps}/>
                <ExperienceSection id="experiences" {...boxProps}/>
                <ProjectsSection id="projects" {...boxProps}/>
                <ContactSection id="contact" {...boxProps}/>
            </Container>
            {/*TODO: use this - https://v4.brittanychiang.com/#jobs, https://goodprofile.me/yunuserturk#experiences, https://www.taniarascia.com/me*/}
        </Wrapper>
    );
};

export default HomePage;
