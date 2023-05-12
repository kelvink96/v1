import {BoxProps, Container} from "@mantine/core";
import Wrapper from "../layout";
import HeroSection from "../sections/Home/Hero";
import AboutSection from "../sections/Home/About";
import ExperienceSection from "../sections/Home/Experience";
import ProjectsSection from "../sections/Home/Projects";
import ContactSection from "../sections/Home/Contact";
import {useMediaQuery} from "@mantine/hooks";

const HomePage = () => {
    const matches = useMediaQuery('(max-width: 1023px)');

    const boxProps: BoxProps = {
        pt: 136,
        pb: 148
    }

    return (
        <Wrapper>
            <Container sx={{maxWidth: matches ? 800 : 1000}}>
                <HeroSection id="home" {...boxProps}/>
                <AboutSection id="about" {...boxProps}/>
                <ExperienceSection id="experiences" {...boxProps}/>
                <ProjectsSection id="projects" {...boxProps}/>
                <ContactSection id="contact" {...boxProps}/>
            </Container>
        </Wrapper>
    );
};

export default HomePage;
