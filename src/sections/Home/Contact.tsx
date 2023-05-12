import {Box, BoxProps, Button, Stack, Text, Title} from "@mantine/core";
import {IconHandClick} from "@tabler/icons-react";

type IProps = BoxProps & Pick<HTMLDivElement, 'id'>

const ContactSection = ({...rest}: IProps) => {
    return (
        <Box {...rest}>
            <Stack align="center">
                <Title mb="lg">04. Get in Touch</Title>
                <Text mb="lg" sx={{width: 600}}>Although I&apos;m not currently looking for any new opportunities, my
                    inbox is always open. Whether you have a question or just want to say hi, I’ll try my best to get
                    back to you!</Text>
                <Button
                    size="md"
                    leftIcon={<IconHandClick size={18}/>}
                    component="a"
                    href="mailto:kelvin.kiprop96@gmail.com"
                >
                    Sey Hello
                </Button>
            </Stack>
        </Box>
    );
};

export default ContactSection;
