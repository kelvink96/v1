import {ActionIcon, Box, BoxProps, Flex, Group, Image, Stack, Text, Title, Tooltip} from "@mantine/core";
import {
    IconBrandAdobe,
    IconBrandAzure,
    IconBrandBootstrap,
    IconBrandCss3,
    IconBrandFigma,
    IconBrandFirebase,
    IconBrandHtml5,
    IconBrandJavascript,
    IconBrandMantine,
    IconBrandMongodb,
    IconBrandNextjs,
    IconBrandOffice,
    IconBrandReact,
    IconBrandSass,
    IconBrandTailwind,
    IconBrandTypescript
} from "@tabler/icons-react";
import MeImg from "../../assets/me.jpg"

type IProps = BoxProps & Pick<HTMLDivElement, 'id'>

const AboutSection = ({...rest}: IProps) => {
    return (
        <Box {...rest}>
            <Flex gap="sm" justify="space-between">
                <Stack>
                    <Title size={36} mb="lg">01. About Me</Title>
                    <Text>Hello! My name is Kelvin and I enjoy creating things that live on the internet. My interest
                        in computers started back in 2010 when I was in high school. I started with writing basic VB.Net
                        and Microsoft Access applications</Text>
                    <Text>Fast-forward to today, and I’ve had the privilege of working with a startup, non-profit
                        organization & information, technology & services company. My main focus these days is
                        on building and shipping business automation solutions at Alternate Limited.</Text>
                    <Text>Here are a few technologies I’ve been working with recently:</Text>
                    <Group>
                        <Tooltip label="HTML5">
                            <ActionIcon>
                                <IconBrandHtml5/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="CSS3">
                            <ActionIcon>
                                <IconBrandCss3/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="SASS/SCSS">
                            <ActionIcon>
                                <IconBrandSass/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="JavaScript">
                            <ActionIcon>
                                <IconBrandJavascript/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="TypeScript">
                            <ActionIcon>
                                <IconBrandTypescript/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="React">
                            <ActionIcon>
                                <IconBrandReact/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="NextJS">
                            <ActionIcon>
                                <IconBrandNextjs/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Bootstrap">
                            <ActionIcon>
                                <IconBrandBootstrap/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Mantine">
                            <ActionIcon>
                                <IconBrandMantine/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Tailwind">
                            <ActionIcon>
                                <IconBrandTailwind/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="MongoDB">
                            <ActionIcon>
                                <IconBrandMongodb/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Figma">
                            <ActionIcon>
                                <IconBrandFigma/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Adobe Creative Suite">
                            <ActionIcon>
                                <IconBrandAdobe/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Azure Cloud">
                            <ActionIcon>
                                <IconBrandAzure/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Office 365">
                            <ActionIcon>
                                <IconBrandOffice/>
                            </ActionIcon>
                        </Tooltip>
                        <Tooltip label="Firebase">
                            <ActionIcon>
                                <IconBrandFirebase/>
                            </ActionIcon>
                        </Tooltip>
                    </Group>
                </Stack>
                <Image src={MeImg} alt="My profile photo" width={320} height={320} radius="sm"/>
            </Flex>
        </Box>
    );
};

export default AboutSection;
