import {
  ActionIcon,
  Container,
  Flex,
  Image,
  SimpleGrid,
  Space,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconHome,
  IconIceCream,
  IconSchool,
} from "@tabler/icons";
import Link from "next/link";
import ReactCountryFlag from "react-country-flag";

export default function Home() {
  return (
    <Flex direction="column" gap="lg" align="center">
      <Flex gap="lg" justify="space-between">
        <Container
          sx={(theme) => ({
            backgroundColor: theme.colors[theme.colorScheme][1],
          })}
        >
          <Image src="vinc-square.jpg" alt="Vince" width={200} height={200} />
        </Container>
        <Flex direction="column">
          <Title order={1}>Hi there! I&apos;m Vince.</Title>
          <Title order={2}>
            Sometimes coder, sometimes leader, all times builder.
          </Title>
          <Text fz="md">
            Here you can learn a little bit more about me, my work and my
            passions.
          </Text>
          <Space h="md" />
          <Flex gap="md">
            {[
              {
                href: "https://twitter.com/vincetiu8",
                icon: IconBrandTwitter,
                color: "cyan",
                shade: 7,
              },
              {
                href: "https://linkedin.com/in/vincetiu8",
                icon: IconBrandLinkedin,
                color: "indigo",
                shade: 7,
              },
              {
                href: "https://github.com/vincetiu8",
                icon: IconBrandGithub,
                color: "gray",
                shade: 9,
              },
            ].map((item) => (
              <Link href={item.href}>
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
              </Link>
            ))}
          </Flex>
        </Flex>
      </Flex>

      <Flex direction="column" align="center" gap="md">
        <Title order={2}>Fun facts about me</Title>
        <Flex direction="row" gap="xl" justify="space-evenly">
          {[
            {
              caption: "Grew up in the Philippines",
              icon: IconHome,
              color: "red",
              shade: 7,
              src: "sibs.jpg",
              alt: "Vince and his siblings",
            },
            {
              caption: "Studying Computer Science at UPenn",
              icon: IconSchool,
              color: "blue",
              shade: 7,
              src: "penn.jpg",
              alt: "Vince at UPenn",
            },
            {
              caption: "Love eating ice cream",
              icon: IconIceCream,
              color: "yellow",
              shade: 7,
              src: "ice-cream.jpg",
              alt: "Vince eating ice cream",
            },
          ].map((item) => (
            <Flex direction="column" gap="sm" align="center">
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
                <Image src={item.src} alt={item.alt} width={200} height={200} />
              </Container>
            </Flex>
          ))}
        </Flex>
        <Flex gap="lg">
          {[
            {
              caption: "Languages I speak",
              items: [
                {
                  level: "Expert",
                  shade: 3,
                  subItems: [
                    {
                      name: "English",
                      icon: "GB",
                      color: "blue",
                    },
                    {
                      name: "C#",
                      icon: "csharp",
                      color: "violet",
                    },
                    {
                      name: "Golang",
                      icon: "go",
                      color: "cyan",
                    },
                    {
                      name: "Java",
                      icon: "java",
                      color: "red",
                    },
                    {
                      name: "JavaScript",
                      icon: "javascript",
                      color: "yellow",
                    },
                    {
                      name: "Python",
                      icon: "python",
                      color: "blue",
                    },
                    {
                      name: "Typescript",
                      icon: "typescript",
                      color: "blue",
                    },
                  ],
                },
                {
                  level: "Intermediate",
                  shade: 2,
                  subItems: [
                    {
                      name: "Chinese",
                      icon: "CN",
                      color: "yellow",
                    },
                    {
                      name: "Bash",
                      icon: "bash",
                      color: "gray",
                    },
                    {
                      name: "OCaml",
                      icon: "ocaml",
                      color: "orange",
                    },
                    {
                      name: "Solidity",
                      icon: "solidity",
                      color: "gray",
                    },
                    {
                      name: "SQL",
                      icon: "sqlite",
                      color: "blue",
                    },
                    {
                      name: "Terraform",
                      icon: "terraform",
                      color: "violet",
                    },
                  ],
                },
                {
                  level: "Basic",
                  shade: 1,
                  subItems: [
                    {
                      name: "Tagalog",
                      icon: "PH",
                      color: "blue",
                    },
                    {
                      name: "C++",
                      icon: "cplusplus",
                      color: "blue",
                    },
                    {
                      name: "Flutter",
                      icon: "flutter",
                      color: "cyan",
                    },
                    {
                      name: "Lua",
                      icon: "lua",
                      color: "blue",
                    },
                    {
                      name: "Rust",
                      icon: "rust",
                      color: "orange",
                    },
                  ],
                },
              ],
            },
            {
              caption: "Frameworks I use",
              items: [
                {
                  level: "",
                  shade: 6,
                  subItems: [
                    {
                      name: "Docker",
                      icon: "docker",
                      color: "cyan",
                    },
                    {
                      name: "Kubernetes",
                      icon: "kubernetes",
                      color: "blue",
                    },
                    {
                      name: "React",
                      icon: "react",
                      color: "cyan",
                    },
                    {
                      name: "Unity",
                      icon: "unity",
                      color: "gray",
                    },
                  ],
                },
              ],
            },
            {
              caption: "Places I've been",
              items: [
                {
                  level: "",
                  shade: 5,
                  subItems: [
                    {
                      name: "ConsenSys",
                      icon: "consensys.png",
                      color: "blue",
                    },
                    {
                      name: "Infura",
                      icon: "infura.png",
                      color: "orange",
                    },
                    {
                      name: "Penn Labs",
                      icon: "penn-labs.png",
                      color: "blue",
                    },
                    {
                      name: "Hack4Impact",
                      icon: "hack4impact.png",
                      color: "green",
                    },
                    {
                      name: "FranklinDAO",
                      icon: "franklindao.png",
                      color: "violet",
                    },
                  ],
                },
              ],
            },
          ].map((section, i) => (
            <Flex direction="column" align="center">
              <Title order={3}>{section.caption}</Title>
              <Space h="md" />
              <Flex direction="row" gap="md" justify="space-evenly">
                {section.items.map((item) => (
                  <Flex
                    sx={(theme) => ({
                      width: "14rem",
                      height: "fit-content",
                      padding: theme.spacing.md,
                      borderColor: theme.colors[theme.colorScheme][item.shade],
                      borderStyle: "solid",
                      borderRadius: theme.radius.sm,
                    })}
                    direction="column"
                    align="center"
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
                              backgroundColor: theme.colors[subItem.color][7],
                            })}
                          >
                            {/* eslint-disable-next-line no-nested-ternary */}
                            {i === 0 && index === 0 ? (
                              <ReactCountryFlag
                                className="emojiFlag"
                                countryCode={subItem.icon}
                              />
                            ) : i === 2 ? (
                              <Image
                                src={subItem.icon}
                                width={30}
                                height={30}
                              />
                            ) : (
                              <i
                                className={`devicon-${subItem.icon}-plain devicon-${subItem.icon}-original`}
                                color="white"
                                style={{
                                  fontSize: 30,
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
        <Title order={2}>Some of my projects</Title>
        <SimpleGrid cols={4}>
          {[
            {
              name: "Dance Dance Revolution",
              description:
                "Interactive dance game with animations and beatmaps.",
              image: "rhythm-hell.jpg",
              color: "red",
              href: "https://github.com/vincetiu8/rhythm-hell",
            },
            {
              name: "Fawna",
              description:
                "On-chain animal adoption marketplace with NFTs and auctions.",
              image: "rhythm-hell.jpg",
              color: "red",
              href: "https://github.com/vincetiu8/rhythm-hell",
            },
            {
              name: "Monet Bridge",
              description:
                "Multichain, multiasset ZK light client bridge using mint and burn tokenomics.",
              image: "rhythm-hell.jpg",
              color: "red",
              href: "https://github.com/vincetiu8/rhythm-hell",
            },
            {
              name: "Optimism EIP-3074",
              description:
                "Modified Optimism go-Ethereum client supporting EIP-3074 opcodes.",
              image: "rhythm-hell.jpg",
              color: "red",
              href: "https://github.com/vincetiu8/rhythm-hell",
            },
            {
              name: "Rhythm Hell",
              description:
                "Auto-generated real-time bullet hell maps using FFTs.",
              image: "rhythm-hell.jpg",
              color: "red",
              href: "https://github.com/vincetiu8/rhythm-hell",
            },
            {
              name: "Rhythm Hell",
              description:
                "Auto-generated real-time bullet hell maps using FFTs.",
              image: "rhythm-hell.jpg",
              color: "red",
              href: "https://github.com/vincetiu8/rhythm-hell",
            },
          ].map((item) => (
            <Link
              href={item.href}
              style={{ textDecoration: "none", color: "white" }}
            >
              <Container
                sx={(theme) => ({
                  borderStyle: "solid",
                  borderColor: theme.colors[item.color][4],
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: "cover",
                  backgroundBlendMode: "multiply",
                  backgroundColor: "rgba(0, 0, 0, 0.7)",
                  maxWidth: 300,
                  minHeight: 180,
                })}
                w="md"
              >
                <Title order={4}>{item.name}</Title>
                <Text>{item.description}</Text>
              </Container>
            </Link>
          ))}
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
