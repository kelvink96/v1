import {Box, BoxProps, Text, Title} from '@mantine/core';

type IProps = BoxProps & Pick<HTMLDivElement, 'id'>

const HeroSection = ({...rest}: IProps) => {
    return (
        <Box {...rest}>
            <Text mb="md" color="blue" weight={600}>Hi, my name is</Text>
            <Title size={48} weight={900}>Kelvin Kiprop.</Title>
            <Title size={48} weight={900} mb="md">Software Developer, UI/UX Designer</Title>
            <Text size="lg" sx={{width: 600}}>I'm a software engineering graduate with a passion for transforming ideas
                into simple applications. I love experimenting with new technologies. Right now, I'm working on building
                and shipping business automation solutions at&nbsp;
                <Text component="a" href="/" weight={700} underline>Alternate Limited</Text>.</Text>
        </Box>
    );
}

export default HeroSection
