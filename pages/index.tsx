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
import ProjectModal, { Project } from "../components/ProjectModal";
import { toolColorMapping } from "../utils/toolColorMapping";

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
                color: "dark",
                shade: 9,
              },
            ].map((item) => (
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
                caption: "Studying CompSci at UPenn",
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
                      },
                      {
                        name: "Golang",
                        icon: "go",
                      },
                      {
                        name: "Java",
                        icon: "java",
                      },
                      {
                        name: "JavaScript",
                        icon: "javascript",
                      },
                      {
                        name: "Python",
                        icon: "python",
                      },
                      {
                        name: "Typescript",
                        icon: "typescript",
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
                      },
                      {
                        name: "OCaml",
                        icon: "ocaml",
                      },
                      {
                        name: "Solidity",
                        icon: "solidity",
                      },
                      {
                        name: "SQL",
                        icon: "sqlite",
                      },
                      {
                        name: "Terraform",
                        icon: "terraform",
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
                      },
                      {
                        name: "Flutter",
                        icon: "flutter",
                      },
                      {
                        name: "Lua",
                        icon: "lua",
                      },
                      {
                        name: "Rust",
                        icon: "rust",
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
                      },
                      {
                        name: "Kubernetes",
                        icon: "kubernetes",
                      },
                      {
                        name: "React",
                        icon: "react",
                      },
                      {
                        name: "Unity",
                        icon: "unity",
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
                                // eslint-disable-next-line no-nested-ternary
                                backgroundColor: subItem.color
                                  ? theme.colors[subItem.color][7]
                                  : toolColorMapping[subItem.icon]
                                  ? theme.colors[
                                      toolColorMapping[subItem.icon]
                                    ][7]
                                  : theme.colors.dark[0],
                              })}
                            >
                              {/* eslint-disable-next-line no-nested-ternary */}
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
            {[
              {
                name: "Dance Dance Revolution",
                description:
                  "Interactive dance game with animations and beatmaps.",
                longDescription:
                  "A game I created for my final CIS 1200 project. In the game, the player presses keys on the keyboard to control a character playing the popular arcade game Dance Dance Revolution. Falling arrows are displayed, and the player must press the keys in time to the arrows to get the dancer to dance in time with the song. This project uses the Java swing framework with custom animation, timing and file I/O logic.",
                image: "dance-dance-revolution.png",
                color: "violet",
                github: "https://github.com/vincetiu8/rhythm-hell",
                youtube: "https://youtu.be/HM9V-DHKi7c",
                tools: ["java"],
              },
              {
                name: "Fawna",
                description:
                  "On-chain animal adoption marketplace with NFTs and auctions.",
                longDescription:
                  "An on-chain animal adoption platform my team created for the 2022 TRON Web3 Hackathon. Animal adoption and sponsorship is a notoriously opaque and disconnected process, making it hard to people to easily support local wildlife. Fawna changes this by enabling sponsorship organizations to post animal listings on the platform and users can see these listings and donate to support their chosen animal. After sponsoring an animal, users can name the animal and get a token which can be integrated into other online games, enabling them to play as their animal.",
                image: "fawna.png",
                color: "green",
                github: "https://github.com/vincetiu8/hack-web3-2022",
                deck: "https://docs.google.com/presentation/d/1_jE3ZMXCAksNi4_VpRn2yYpExMLoTxtohW9VnKGHJ_I/edit?usp=sharing",
                teammates: [
                  {
                    name: "Cyrus Singer",
                    link: "https://github.com/brianbob12",
                  },
                  {
                    name: "Joey Shin",
                    link: "https://www.linkedin.com/in/joeyshin/",
                  },
                ],
                tools: ["javascript", "solidity", "react"],
              },
              {
                name: "Monet Bridge",
                description:
                  "Multichain, multiasset ZK light client bridge using mint and burn tokenomics.",
                longDescription:
                  "A multichain, multiasset zero-knowledge light client bridge built for ETH San Francisco 2022. Bridge infrastructure is one of the most critical components of a blockchain ecosystem, and recent bridge hacks have shown increased need to build secure bridging mechanisms, enabling users to safely transfer tokens between chains. Succinct Labs previously published a proof-of-concept bridge using zero-knowledge proofs to trustlessly move a token from Ethereum to Gnosis. We expanded upon their work by modifying their bridge to support multiple tokens and blockchains, allowing anyone to easily add their own token to the bridge and transfer it across. We also used mint and burn tokenomics instead of locking tokens to decrease duplicate representations of one token, enabling a more efficient and transparent bridging ecosystem.",
                image: "monet-bridge.png",
                color: "pink",
                github:
                  "https://github.com/franklindao-ethsf/eth-proof-of-consensus",
                deck: "https://docs.google.com/presentation/d/1vHDHgo2Ht-q88rnBfjtZRletS77a5Ohxqg7SSw9fyzk/edit#slide=id.g183d6adefd9_3_17",
                teammates: [
                  {
                    name: "Brandon Wang",
                    link: "https://www.linkedin.com/in/~brandon/",
                  },
                  {
                    name: "Cindy Jiang",
                    link: "https://www.linkedin.com/in/cindyxjiang/",
                  },
                  {
                    name: "Jun Kim",
                    link: "https://www.linkedin.com/in/jun-kim-9b1387175/",
                  },
                ],
                awards: ["Best Use of Gnosis", "Best Use of Covalent"],
                tools: ["javascript", "solidity", "react"],
              },
              {
                name: "Optimism EIP-3074",
                description:
                  "Modified Optimism go-Ethereum client supporting EIP-3074 opcodes.",
                longDescription:
                  "Go-Ethereum client on the Optimism network supporting EIP-3074 opcodes modified for ETH Bogota 2022. A major obstacle to mainstream Ethereum adoption is the poor UX: users have to pay gas fees for everything, which is vastly different from using traditional platforms. To address this, Ethereum Improvement Proposal (EIP) 3074 was created to add new operation codes to the Ethereum Virtual Machine (EVM) allowing others to submit transactions on behalf of a user. In this project, we implemented the opcodes on Optimism's go-Ethereum client. This would enable companies to subsidize the gas fees of their users, allowing for increased adoption.",
                image: "optimism-eip-3074.png",
                color: "red",
                github: "https://github.com/vincetiu8/op-geth-eip-3074",
                deck: "https://docs.google.com/presentation/d/1M41crSTXWJt1NmBgo0bHFm2F-8OvmS8lBq70t3_bBKI/edit?usp=sharing",
                teammates: [
                  {
                    name: "Jun Kim",
                    link: "https://www.linkedin.com/in/jun-kim-9b1387175/",
                  },
                ],
                awards: [
                  "SozuHaus Best Hack",
                  "Best Infrastructure Hack on Optimism",
                ],
                tools: ["go", "solidity"],
              },
              {
                name: "Greener Grocer",
                description: "Sustainable grocery delivery aggregator.",
                longDescription:
                  "Platform that aggregates grocery delivery orders into one delivery made for HackMIT 2022. The online shopping industry has seen a massive boom over the last decade, but last-mile deliveries create lots of greenhouse gas emissions. Insteadof delivering everyone's packages individually, it's much more sustainable to combine these deliveries into a larger one and ship the package once. We created a platform that does this for grocery deliveries, where customers can browse items on our website from Instacart and order them. These orders then get combined into a larger order which gets sent to someone's house, and then everyone can pick up their groceries from that location, saving delivery costs and helping protect the environment.",
                image: "greener-grocer.png",
                color: "lime",
                github: "https://github.com/aidangoettsch/hackmit-2022",
                deck: "https://docs.google.com/presentation/d/1RM6PRTpyR8rt3ybkHprkw0FmXoSwcl6-0AD0wQkfjxE/edit?usp=sharing",
                teammates: [
                  {
                    name: "Aidan Goettsch",
                    link: "https://www.linkedin.com/in/aidan-goettsch/",
                  },
                  {
                    name: "Max Chiu",
                    link: "https://www.linkedin.com/in/max-chiu/",
                  },
                  {
                    name: "Pascal Passigan",
                    link: "https://www.linkedin.com/in/pascal-p-ba0198167/",
                  },
                ],
                awards: [
                  "Best Use of Binance Smart Chain",
                  "Most Sustainable Use of Blockchain 3rd Place",
                ],
                tools: [
                  "javascript",
                  "react",
                  "python",
                  "flask",
                  "sqlite",
                  "solidity",
                ],
              },
              {
                name: "Blossom",
                description: "Dating app for eco-conscious lovers.",
                longDescription:
                  "Dating app with suggestions for eco-friendly activities built for Columbia DivHacks 2022. As more people become environmentally conscious, we wanted to create a platform where they could find other environmentally conscious people and date ideas to create a more sustaianable dating culture.",
                image: "blossom.png",
                color: "green",
                github: "https://github.com/vincetiu8/columbia-divhacks-2022",
                youtube: "https://www.youtube.com/watch?v=kTdpP03aEhI",
                deck: "https://docs.google.com/presentation/d/11xnrkuQzL984wLfbsWW-R8zu270Fm3q9wUwGmFV4_gU/edit?usp=sharing",
                website: "https://devpost.com/software/blossom-wsvi2n",
                teammates: [
                  {
                    name: "Brilynd Madeya",
                    link: "https://www.linkedin.com/in/brilynd-madeya/",
                  },
                  {
                    name: "Dominic Lee",
                    link: "https://www.linkedin.com/in/dominicalee/",
                  },
                  {
                    name: "Tina Liu",
                    link: "https://www.linkedin.com/in/tina-liu-ba0b371b2/",
                  },
                ],
                awards: [
                  "Best Smart Cities Hack",
                  "Most Creative Use of Twilio",
                ],
                tools: ["typescript", "react", "mongodb"],
              },
              {
                name: "WalkWithMe",
                description: "App for finding others to walk with.",
                longDescription:
                  "App allowing people to find others walking in the same direction and walk with them, built for PennApps 2022. Walking alone is a dangerous activity, especially at night, and we thought of building this when one of us was walking back to our dorm at night. Through our app, users can find others walking in the same direction as them and pair up to walk together. Not only will they be safer, but they could also make a new friend along the way.",
                image: "walk-with-me.png",
                color: "blue",
                github: "https://github.com/vincetiu8/walkwithme",
                youtube: "https://youtu.be/b0tF1-pTeQ0",
                website: "https://devpost.com/software/walkwithme-sxw8uh",
                teammates: [
                  {
                    name: "Eric Zou",
                    link: "https://www.linkedin.com/in/eric-zou-4512a7219/",
                  },
                  {
                    name: "Jimmy Zhou",
                    link: "https://www.linkedin.com/in/jim-jimmyzhou/",
                  },
                  {
                    name: "Mason Stark",
                    link: "https://www.linkedin.com/in/mason-stark-3671671b5/",
                  },
                ],
                awards: ["Best Blockchain Hack"],
                tools: ["javascript", "react", "go"],
              },
              {
                name: "MP3 Processor",
                description:
                  "Script processing mp3 files and normalizing volumes to burn them into CDs.",
                longDescription:
                  "A simple script I built to trim silence from the beginning and end of mp3 files and normalize their volumes to burn them into CDs. I used this to burn songs into CDs to listen to in my car.",
                color: "orange",
                github: "https://github.com/vincetiu8/mp3-processor",
                tools: ["python"],
              },
              {
                name: "Attack of the Zombonis",
                description: "Top-down 2D multiplayer zombie survival game.",
                longDescription:
                  "A top-down 2D multiplayer zombie survival game built with the BSM Bytesurfers. This uses Photon networking to sync the players together and custom sprites for all the objects.",
                image: "zombie-game.png",
                color: "green",
                github: "https://github.com/vincetiu8/zombie-game",
                youtube: "https://youtu.be/yl7Hvr7UW0w",
                website: "https://bytesurfers.itch.io/attack-of-the-zomboids",
                teammates: [
                  {
                    name: "Akshat Bohre",
                    link: "https://github.com/CoderAkshat227",
                  },
                  {
                    name: "Bryce Lao",
                    link: "https://github.com/BryceLao",
                  },
                  {
                    name: "Cartoon Kaewkamnerd",
                    link: "https://github.com/RoteeSaiMai",
                  },
                  {
                    name: "Dylan Tiu",
                    link: "https://www.linkedin.com/in/dylan-tiu-7a9158193/",
                  },
                  {
                    name: "Tomas Padilla",
                    link: "https://github.com/RKSDude",
                  },
                ],
                tools: ["unity", "csharp"],
              },
              {
                name: "Rhythm Hell",
                description:
                  "Procedurally-generated bullet hell game using FFTs.",
                longDescription:
                  "A bullet hell game with procedurally-generated levels using FFTs created for Blueprint MIT 2021. This loaded bullets into the game using FFTs to process incoming audio streams. Custom music files could be uploaded and levels generated from them on the fly.",
                image: "rhythm-hell.jpg",
                color: "red",
                github: "https://github.com/vincetiu8/rhythm-hell",
                youtube: "https://youtu.be/eRVUK8YLYQc",
                teammates: [
                  {
                    name: "Dylan Tiu",
                    link: "https://www.linkedin.com/in/dylan-tiu-7a9158193/",
                  },
                  {
                    name: "Tomas Padilla",
                    link: "https://github.com/RKSDude",
                  },
                ],
                tools: ["unity", "csharp"],
              },
              {
                name: "Math Aiming Corrections",
                description: "A demonstration of how games correct weapon aim.",
                longDescription:
                  "A visual demonstration of how video games correct player weapons to aim properly, built for my IB Higher Level Mathematics Internal Assessment. Users can toggle on and off aiming corrections and see real-time how it would affect particle trajectory coming out of an object.",
                image: "math-aiming-corrections.png",
                color: "blue",
                github: "https://github.com/vincetiu8/math-aiming-corrections",
                youtube: "https://www.youtube.com/watch?v=k1LsOcL6QAE",
                website:
                  "https://docs.google.com/document/d/13QM-74e9h3rMFswLgEVXhA07sw8lRIxKdEd8BaaQYn0/edit?usp=sharing",
                tools: ["unity", "csharp"],
              },
            ].map((item: Project) => (
              <Grid.Col sm={4} lg={3} xl={2} sx={{ maxWidth: "fit-content" }}>
                <UnstyledButton
                  onClick={() => {
                    setModalOpened(true);
                    setProject(item);
                  }}
                  key={item.name}
                >
                  <Container
                    sx={(theme) => ({
                      borderStyle: "solid",
                      borderColor: theme.colors[item.color][4],
                      backgroundImage: `url(images/projects/${item.image})`,
                      backgroundSize: "cover",
                      backgroundBlendMode: "multiply",
                      backgroundColor: "rgba(0, 0, 0, 0.7)",
                    })}
                    w="md"
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
