import {useState} from 'react';
import {
    Box,
    Burger,
    Button,
    Container,
    createStyles,
    Divider,
    Drawer,
    Group,
    Header,
    Image,
    rem,
    ScrollArea,
    Stack,
    Text
} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {Scrollchor} from 'react-scrollchor';
import MeImg from "../assets/me.jpg";
import {useScrollPosition} from "../hooks/useScrollPosition";

const links = [
    {
        "link": "/about",
        "label": "About me",
        "ref": "about"
    },
    {
        "link": "/experiences",
        "label": "Experiences",
        "ref": "experiences"
    },
    {
        "link": "/projects",
        "label": "Projects",
        "ref": "projects"
    },
    {
        "link": "/contact",
        "label": "Contact",
        "ref": "contact"
    }
]

const useStyles = createStyles((theme, {scrollPosition}: any) => ({
    root: {
        border: 'none',
        padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
        position: 'sticky',
        top: 0,
        zIndex: 3,
        background: scrollPosition > 320 ? 'rgba( 255, 255, 255, .75 )' : 'none',
        boxShadow: scrollPosition > 320 ? theme.shadows.sm : 'none',
        backdropFilter: 'blur(8px)',
        maxWidth: '100vw'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            display: 'none',
        },
    },

    burger: {
        [theme.fn.largerThan('xs')]: {
            display: 'none',
        },
    },

    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.colors.gray[7],
        fontSize: theme.fontSizes.sm,
        fontWeight: 600,
        backgroundColor: 'transparent',
        border: '1px solid transparent',

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
            borderColor: theme.colors.blue[3]
        },
    },

    linkActive: {
        '&, &:hover': {
            backgroundColor: theme.fn.variant({variant: 'light', color: theme.primaryColor}).background,
            color: theme.fn.variant({variant: 'light', color: theme.primaryColor}).color,
        },
    },

    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
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
}));


const AppNav = () => {
    const scrollPosition: number = useScrollPosition()
    const {classes, cx, theme} = useStyles({scrollPosition});
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const [active, setActive] = useState();
    const [drawerOpened, {toggle: toggleDrawer, close: closeDrawer}] = useDisclosure(false);

    const items = links.map((link, index) => (
        <Button
            component={Scrollchor}
            key={link.ref}
            to={link.ref}
            className={cx(classes.link, {[classes.linkActive]: active === link.link})}
            animate={{offset: -32, duration: 600}}
        >
            0{++index}.&nbsp;&nbsp;
            {link.label}
        </Button>
    ));

    return (
        <Box className={classes.root}>
            <Header height="100%" sx={{backgroundColor: 'transparent', border: 'none'}}>
                <Container fluid className={classes.header}>
                    <Image src={MeImg} alt="My profile photo" width={48} height={48}/>
                    <Group>
                        <Group spacing='sm' className={cx(classes.links, classes.hiddenTablet)}>
                            {items}
                            <Button
                                component="a"
                                href="/Kelvin Kiptum Kiprop CV.pdf"
                                variant="outline"
                            >
                                Resume
                            </Button>
                        </Group>
                        <Burger opened={drawerOpened} onClick={toggleDrawer} className={classes.hiddenDesktop}/>
                    </Group>
                </Container>
            </Header>
            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="xs"
                padding="md"
                title={<Text>Menu</Text>}
                className={classes.hiddenDesktop}
                zIndex={1000000}
                position="right"
            >
                <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="-md">
                    <Divider my="sm" color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}/>
                    <Stack px="lg">
                        {items}
                        <Button component="a" href="/Kelvin Kiptum Kiprop CV.pdf">Resume`</Button>
                    </Stack>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}

export default AppNav
