import {
  ActionIcon,
  Container,
  Flex,
  Grid,
  Image,
  Space,
  Text,
  ThemeIcon,
  Title,
  UnstyledButton,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHome,
  IconIceCream,
  IconSchool,
} from "@tabler/icons";
import ReactCountryFlag from "react-country-flag";
import { useState } from "react";
import ProjectModal from "../components/ProjectModal";
import { toolColorMapping } from "../utils/toolColorMapping";
import { websitesList } from "./info/websites";
import { summaryImages } from "./info/summaryImages";
import { lfp } from "./info/lfp";
import { Project, projects } from "./info/projects";

export default function Home() {
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [project, setProject] = useState<Project>({
    name: "",
    description: "",
    longDescription: "",
    image: "",
    color: "",
    github: "",
    youtube: "",
    tools: [],
  });

  return (
    <>
      <Flex direction="column" gap="lg" align="center">
        <Flex direction="column" align="center">
          <Container
            sx={(theme) => ({
              backgroundColor: theme.colors[`${theme.colorScheme}-theme`][1],
            })}
          >
            <Image
              src="images/personal/vinc-square.jpg"
              alt="Vince"
              width={200}
              height={200}
            />
          </Container>
          <Title order={1} ta="center">
            Hi there! I&apos;m Vince
          </Title>
          <Title order={2} ta="center">
            Sometimes coder, sometimes leader, all times builder.
          </Title>
          <Text fz="md" ta="center">
            Here you can learn a little bit more about me, my work and my
            passions.
          </Text>
          <Space h="md" />
          <Flex gap="md" justify="center">
            {websitesList.map((item) => (
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                key={item.href}
              >
                <ActionIcon>
                  <ThemeIcon
                    size="xl"
                    sx={(theme) => ({
                      backgroundColor: theme.colors[item.color][item.shade],
                    })}
                  >
                    <item.icon />
                  </ThemeIcon>
                </ActionIcon>
              </a>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" align="center" gap="md">
          <Title order={2} ta="center">
            Fun facts about me
          </Title>
          <Flex direction="row" gap="lg" justify="space-evenly" wrap="wrap">
            {summaryImages.map((item) => (
              <Flex direction="column" gap="sm" align="center" key={item.src}>
                <Flex direction="row" gap="sm">
                  <ThemeIcon
                    size="lg"
                    sx={(theme) => ({
                      backgroundColor: theme.colors[item.color][item.shade],
                    })}
                  >
                    <item.icon size={20} />
                  </ThemeIcon>
                  <Text>{item.caption}</Text>
                </Flex>
                <Container
                  sx={(theme) => ({
                    backgroundColor: theme.colors[item.color][item.shade],
                  })}
                >
                  <Image
                    src={`images/personal/${item.src}`}
                    alt={item.alt}
                    width={200}
                    height={200}
                  />
                </Container>
              </Flex>
            ))}
          </Flex>

          <Flex gap="lg" wrap="wrap" justify="center">
            {lfp.map((section, i) => (
              <Flex direction="column" align="center" key={section.caption}>
                <Title order={3}>{section.caption}</Title>
                <Space h="md" />
                <Flex
                  direction="row"
                  gap="md"
                  justify="space-evenly"
                  wrap="wrap"
                >
                  {section.items.map((item) => (
                    <Flex
                      sx={(theme) => ({
                        width: "14rem",
                        height: "fit-content",
                        padding: theme.spacing.md,
                        borderColor:
                          theme.colors[`${theme.colorScheme}-theme`][
                            item.shade
                          ],
                        borderStyle: "solid",
                        borderRadius: theme.radius.sm,
                      })}
                      direction="column"
                      align="center"
                      key={item.level}
                    >
                      {item.level !== "" ? (
                        <>
                          <Title order={4}>{item.level}</Title>
                          <Space h="sm" />
                        </>
                      ) : (
                        ""
                      )}
                      <Flex direction="column" gap="sm" sx={{ width: "100%" }}>
                        {item.subItems.map((subItem, index) => (
                          <Flex key={subItem.name} gap="sm" align="center">
                            <ThemeIcon
                              sx={(theme) => ({
                                width: 50,
                                height: 50,

                                backgroundColor: subItem.color
                                  ? theme.colors[subItem.color][7]
                                  : toolColorMapping[subItem.icon]
                                    ? theme.colors[
                                        toolColorMapping[subItem.icon]
                                      ][7]
                                    : theme.colors.dark[0],
                              })}
                            >
                              {}
                              {i === 0 && index === 0 ? (
                                <ReactCountryFlag
                                  className="emojiFlag"
                                  countryCode={subItem.icon}
                                  style={{
                                    fontSize: "1.5rem",
                                  }}
                                />
                              ) : i === 2 ? (
                                <Image
                                  alt=""
                                  src={`images/organizations/${subItem.icon}`}
                                  width={25}
                                  height={25}
                                />
                              ) : (
                                <i
                                  className={`devicon-${subItem.icon}-plain devicon-${subItem.icon}-original`}
                                  color="white"
                                  style={{
                                    fontSize: 25,
                                  }}
                                />
                              )}
                            </ThemeIcon>
                            <Text>{subItem.name}</Text>
                          </Flex>
                        ))}
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>

        <Flex direction="column" gap="lg" align="center">
          <Title order={2} ta="center">
            Some of my projects
          </Title>
          <Grid justify="center">
            {projects.map((item: Project) => (
              <Grid.Col
                sm={6}
                lg={4}
                xl={3}
                sx={{ maxWidth: "fit-content" }}
                key={item.name}
                mih="10rem"
              >
                <UnstyledButton
                  onClick={() => {
                    setModalOpened(true);
                    setProject(item);
                  }}
                  key={item.name}
                  w="100%"
                  h="100%"
                >
                  <Container
                    sx={(theme) => ({
                      borderStyle: "solid",
                      borderColor: theme.colors[item.color][4],
                      backgroundImage: `url(images/projects/${item.image})`,
                      backgroundSize: "cover",
                      backgroundBlendMode: "multiply",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                      backgroundRepeat: "no-repeat",
                    })}
                    w="100%"
                    h="100%"
                  >
                    <Title order={4} color="gray.0">
                      {item.name}
                    </Title>
                    <Text color="gray.0">{item.description}</Text>
                  </Container>
                </UnstyledButton>
              </Grid.Col>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <ProjectModal
        opened={modalOpened}
        project={project}
        onClose={() => setModalOpened(false)}
      />
    </>
  );
}
