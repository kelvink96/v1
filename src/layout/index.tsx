import {ReactNode} from "react";
import {
    ActionIcon,
    Affix,
    Box,
    Center,
    createStyles,
    Group,
    rem,
    Stack,
    Text,
    Tooltip,
    Transition
} from "@mantine/core";
import {
    IconBrandBehance,
    IconBrandDribbble,
    IconBrandFacebook,
    IconBrandGithub,
    IconBrandInstagram,
    IconBrandLinkedin,
    IconBrandTwitter
} from "@tabler/icons-react";
import {AppNav} from "../components";

const useStyles = createStyles((theme) => ({
    wrapper: {
        backgroundColor: '#eeeeee',
        backgroundImage: 'radial-gradient(at 47% 33%, hsl(180.00, 0%, 97%) 0, transparent 59%), radial-gradient(at 82% 65%, hsl(216.00, 60%, 90%) 0, transparent 55%)'
    },
    email: {
        writingMode: 'vertical-rl',
        textOrientation: 'mixed',
    },
    line: {
        content: 'inherit',
        display: 'block',
        width: '1px',
        height: '90px',
        margin: '0px auto',
        backgroundColor: 'gray'
    },
    hiddenTablet: {
        [theme.fn.smallerThan('md')]: {
            display: 'none',
        },
    },
    hiddenDesktop: {
        [theme.fn.largerThan('md')]: {
            display: 'none',
        },
    },
}))

interface IProps {
    children: ReactNode
}

const Wrapper = ({children}: IProps) => {
    const {classes} = useStyles();

    return (
        <Box className={classes.wrapper}>
            <AppNav/>
            {children}
            <Affix position={{bottom: rem(0), right: rem(20)}} className={classes.hiddenTablet}>
                <Transition transition="slide-up" mounted={true}>
                    {(transitionStyles) => (
                        <Stack style={transitionStyles}>
                            <Text
                                className={classes.email}
                                component="a"
                                href="mailto:kelvin.kiprop96@gmail.com"
                            >
                                kelvin.kiprop96@gmail.com
                            </Text>
                            <div className={classes.line}></div>
                        </Stack>
                    )}
                </Transition>
            </Affix>
            <Affix position={{bottom: rem(0), left: rem(20)}} className={classes.hiddenTablet}>
                <Transition transition="slide-up" mounted={true}>
                    {(transitionStyles) => (
                        <Stack style={transitionStyles}>
                            <Stack>
                                <Tooltip label="Behance">
                                    <ActionIcon component="a" href="https://www.behance.net/kelvink96"
                                                target="_blank">
                                        <IconBrandBehance/>
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Dribbble">
                                    <ActionIcon component="a" href="https://dribbble.com/kelvink96"
                                                target="_blank">
                                        <IconBrandDribbble/>
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Facebook">
                                    <ActionIcon component="a" href="https://www.facebook.com/kelvinkk96"
                                                target="_blank">
                                        <IconBrandFacebook/>
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="GitHub">
                                    <ActionIcon component="a" href="https://github.com/kelvink96"
                                                target="_blank">
                                        <IconBrandGithub/>
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Instagram">
                                    <ActionIcon component="a" href="https://www.instagram.com/kelvink_96/"
                                                target="_blank">
                                        <IconBrandInstagram/>
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="LinkedIn">
                                    <ActionIcon component="a" href="https://www.linkedin.com/in/kelvink96/"
                                                target="_blank">
                                        <IconBrandLinkedin/>
                                    </ActionIcon>
                                </Tooltip>
                                <Tooltip label="Twitter">
                                    <ActionIcon component="a" href="https://twitter.com/kelvink_96"
                                                target="_blank">
                                        <IconBrandTwitter/>
                                    </ActionIcon>
                                </Tooltip>
                            </Stack>
                            <div className={classes.line}></div>
                        </Stack>
                    )}
                </Transition>
            </Affix>
            <Center p="md">
                <Stack align="center">
                    <Group className={classes.hiddenDesktop}>
                        <Tooltip label="Behance">
                            <ActionIcon component="a" href="https://www.behance.net/kelvink96"
                                        target="_blank">
                                <IconBrandBehance/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Dribbble">
                            <ActionIcon component="a" href="https://dribbble.com/kelvink96"
                                        target="_blank">
                                <IconBrandDribbble/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Facebook">
                            <ActionIcon component="a" href="https://www.facebook.com/kelvinkk96"
                                        target="_blank">
                                <IconBrandFacebook/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="GitHub">
                            <ActionIcon component="a" href="https://github.com/kelvink96"
                                        target="_blank">
                                <IconBrandGithub/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Instagram">
                            <ActionIcon component="a" href="https://www.instagram.com/kelvink_96/"
                                        target="_blank">
                                <IconBrandInstagram/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="LinkedIn">
                            <ActionIcon component="a" href="https://www.linkedin.com/in/kelvink96/"
                                        target="_blank">
                                <IconBrandLinkedin/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Twitter">
                            <ActionIcon component="a" href="https://twitter.com/kelvink_96"
                                        target="_blank">
                                <IconBrandTwitter/>
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                    <Text>Designed & Built by Kelvin Kiprop</Text>
                </Stack>
            </Center>
        </Box>
    )
};

export default Wrapper;
