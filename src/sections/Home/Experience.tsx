import {Box, BoxProps, Group, List, Stack, Text, Title} from "@mantine/core";
import {experiences} from "../../content/experiences";
import {GlassCard} from "../../components";

type IProps = BoxProps & Pick<HTMLDivElement, 'id'>

const ExperienceSection = ({...rest}: IProps) => {
    const items = experiences.map(d => (<GlassCard key={d.company} p="md">
        <Stack>
            <Text size={24} weight={700}>{d.position}</Text>
            <Group spacing="xs">
                <Text size="md" weight={700}>{d.company}</Text>
                <Text>-</Text>
                <Text size="md">{d.period}</Text>
            </Group>
            <Text>{d.description}</Text>
            <List
                spacing="sm"
                size="md"
                center
            >
                {d.workDescriptions.map(w => <List.Item key={w}>{w}</List.Item>)}
            </List>
            <Group spacing="xs"><Text weight={500}>Skills:</Text> {d.skills.map(s => <Text key={s}>{s},</Text>)}
            </Group>
        </Stack>
    </GlassCard>))

    return (
        <Box {...rest}>
            <Title size={36} mb="lg">02. Work Experience</Title>
            <Stack>
                {items}
            </Stack>
        </Box>
    );
};

export default ExperienceSection;
