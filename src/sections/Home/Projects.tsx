import {ActionIcon, Box, BoxProps, Group, SimpleGrid, Stack, Text, Title, Tooltip} from "@mantine/core";
import {projects} from "../../content/projects";
import {GlassCard} from "../../components";
import {IconBrandGithub, IconExternalLink} from "@tabler/icons-react";

type IProps = BoxProps & Pick<HTMLDivElement, 'id'>

const ProjectsSection = ({...rest}: IProps) => {
    const items = projects.filter(_ => Boolean(_.featured)).map(_ => <GlassCard key={_.title} p="md">
        <Stack>
            <Group position="apart">
                <Text color="blue" weight={700} size="sm">{_.year}</Text>
                <Group position="apart">
                    <Tooltip label="Source code">
                        <ActionIcon
                            component="a"
                            href={_.repository}
                            target="_blank"
                        >
                            <IconBrandGithub size={18}/></ActionIcon>
                    </Tooltip>
                    <Tooltip label="Demo">
                        <ActionIcon
                            component="a"
                            href={_.demo}
                            target="_blank"
                        >
                            <IconExternalLink size={19}/></ActionIcon>
                    </Tooltip>
                </Group>
            </Group>
            <Text size="lg" weight={700} component="a" href={_.repository} target="_blank">{_.title}</Text>
            <Text size="sm">{_.description}</Text>
            <Group spacing="xs">{_.tools.map(__ => <Text key={__} size="sm" color="dimmed">{__},</Text>)}</Group>
        </Stack>
    </GlassCard>)

    return (
        <Box {...rest}>
            <Title mb="lg">03. Featured Projects</Title>
            <SimpleGrid
                cols={3}
                spacing="lg"
                breakpoints={[
                    {maxWidth: 'md', cols: 2, spacing: 'md'},
                    {maxWidth: 'sm', cols: 1, spacing: 'sm'},
                    {maxWidth: 'xs', cols: 1, spacing: 'sm'},
                ]}>
                {items}
            </SimpleGrid>
        </Box>
    );
};

export default ProjectsSection;
