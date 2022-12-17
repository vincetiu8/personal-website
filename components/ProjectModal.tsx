import {
  ActionIcon,
  Badge,
  CloseButton,
  Flex,
  Image,
  Modal,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandYoutube,
  IconPresentationAnalytics,
  IconWorld,
} from "@tabler/icons";
import { toolColorMapping } from "../utils/toolColorMapping";

export type Person = {
  name: string;
  link: string;
};

export type Project = {
  name: string;
  description: string;
  longDescription: string;
  image?: string;
  color: string;
  github?: string;
  youtube?: string;
  deck?: string;
  website?: string;
  tools: string[];
  teammates?: Person[];
  awards?: string[];
};

export type ProjectModalProps = {
  opened: boolean;
  onClose: () => void;
  project: Project;
};

export default function ProjectModal(props: ProjectModalProps) {
  const themeProvider = useMantineTheme();
  const { opened, project, onClose } = props;
  const {
    name,
    longDescription,
    image,
    color,
    github,
    youtube,
    deck,
    website,
    tools,
    teammates,
    awards,
  } = project;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      transition="slide-down"
      transitionDuration={300}
      exitTransitionDuration={300}
      transitionTimingFunction="ease"
      size="lg"
      withCloseButton={false}
      overlayColor={
        themeProvider.colors[color]
          ? themeProvider.colors[color][2]
          : themeProvider.colors.gray[2]
      }
    >
      <Flex direction="column" gap="sm">
        <Flex gap="sm" justify="space-between" align="center">
          <Title order={3}>{name}</Title>
          <CloseButton onClick={onClose} />
        </Flex>
        {image && <Image src={`images/projects/${image}`} alt={name} />}
        <Text size="md">{longDescription}</Text>
        <Flex gap="sm" align="center" wrap="wrap">
          <Text size="sm">Languages & Frameworks:</Text>
          {tools.map((tool) => (
            <ThemeIcon
              sx={(theme) => ({
                width: 30,
                height: 30,
                backgroundColor: theme.colors[toolColorMapping[tool]][7],
              })}
            >
              <i
                className={`devicon-${tool}-plain devicon-${tool}-original`}
                color="white"
                style={{
                  fontSize: 15,
                }}
              />
            </ThemeIcon>
          ))}
        </Flex>
        {teammates && (
          <Flex gap="sm" align="center" wrap="wrap">
            <Text size="sm">Teammates:</Text>
            {teammates.map((person) => (
              <a
                href={person.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ lineHeight: 0 }}
              >
                <Badge color={`${color}.5`} variant="filled">
                  {person.name}
                </Badge>
              </a>
            ))}
          </Flex>
        )}
        {awards && (
          <Flex gap="sm" align="center" wrap="wrap">
            <Text size="sm">Awards:</Text>
            {awards.map((award) => (
              <Badge color="yellow.6" variant="filled">
                {award}
              </Badge>
            ))}
          </Flex>
        )}
        <Flex gap="sm" align="center">
          {(github || youtube || deck || website) && (
            <Text size="sm">Links:</Text>
          )}
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors.dark[9] }}
                  size="lg"
                >
                  <IconBrandGithub size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
          {youtube && (
            <a href={youtube} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors.red[7] }}
                  size="lg"
                >
                  <IconBrandYoutube size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
          {deck && (
            <a href={deck} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors.yellow[7] }}
                  size="lg"
                >
                  <IconPresentationAnalytics size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <ActionIcon>
                <ThemeIcon
                  sx={{ backgroundColor: themeProvider.colors[`${color}`][7] }}
                  size="lg"
                >
                  <IconWorld size={20} />
                </ThemeIcon>
              </ActionIcon>
            </a>
          )}
        </Flex>
      </Flex>
    </Modal>
  );
}
