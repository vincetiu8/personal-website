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

export const projects: Project[] = [
  {
    name: "Usurper",
    description: "Restaurant reservation sniper.",
    longDescription:
      "Usurper is a restaurant reservation bot that snipes hard-to-get reservations for you. It allows you to schedule a reservation at a restaurant of your choice at a specific time, and will automatically book the reservation for you when it becomes available.",
    image: "usurper.png",
    color: "red",
    github: "https://github.com/vincetiu8/usurper",
    tools: ["cplusplus"],
  },
  {
    name: "Resonance",
    description: "One-click multichain crypto investment.",
    longDescription:
      "Resonance allows users to invest in a diversified portfolio of cryptocurrencies across multiple chains with a single click. Users can choose from a variety of risk profiles and investment strategies, and Resonance will automatically allocate their funds accordingly. The platform also automatically bridges assets across chains and deploys them into relevant liquidity pools.",
    image: "resonance.png",
    color: "pink",
    github: "https://github.com/zhouhelena/resonance",
    youtube: "https://youtu.be/rN72n7ad8qo",
    tools: ["typescript", "solidity"],
    teammates: [
      {
        name: "Helena Zhou",
        link: "https://www.linkedin.com/in/helena-zhou/",
      },
    ],
  },
  {
    name: "Sit-Downs",
    description: "No more standups.",
    longDescription:
      "Sit-Downs is a chrome extension that synchronizes team activity, eliminating the need for standup meetings. The extension scrapes each website you visit and uses an AI model to generate a summary of each website. These summaries are then analyzed to deduce what you have been working on, and automatically shares this with your team in real-time. You can also see what your teammates have been working on and more information, helping your team stay productive.",
    image: "ion-protocol.png",
    color: "violet",
    github: "https://github.com/penn-genai/sit-downs",
    youtube: "https://www.youtube.com/watch?v=38oEsslcxRI",
    tools: ["typescript", "python", "supabase", "nomic", "mistral"],
    teammates: [
      {
        name: "Justin Sun",
        link: "https://www.linkedin.com/in/justinsunyt/",
      },
      {
        name: "Helena Zhou",
        link: "https://www.linkedin.com/in/helena-zhou/",
      },
      {
        name: "Benjamin Xu",
        link: "https://www.linkedin.com/in/benjxu/",
      },
    ],
  },
  {
    name: "Ion Protocol",
    description: "Enhancing liquidity for validator staked assets.",
    longDescription:
      "Ion Protocol is a decentralized protocol that consolidates liquidity for Liquid Staking Tokens (LSTs). These tokens are issued by Liquid Staking Providers as collateral for deposited tokens. Ion is a hybrid between a CDP issuer and a lending market, allowing the protocol to account for different risk models between validator sets. It is built using on-chain Solidity contracts, off-chain Golang services and a React frontend.",
    image: "ion-protocol.png",
    color: "cyan",
    website: "https://www.ionprotocol.io/",
    tools: ["typescript", "go", "kubernetes", "docker", "solidity"],
    teammates: [
      {
        name: "Chunda McCain",
        link: "https://www.linkedin.com/in/chundamccain/",
      },
      {
        name: "Jun Kim",
        link: "https://www.linkedin.com/in/jun-kim-9b1387175/",
      },
    ],
  },
  {
    name: "Home Away From Home",
    description: "Knowledgebase for prospective H-1B visa applicants.",
    longDescription:
      "A knowledgebase for prospective H-1B visa applicants, built for CIS 5500 final project. This webapp allows users to look for attractive housing and employment options for H-1B visa holders on a map. Users can filter jobs and housing options by various metrics. This project uses React for the frontend and NodeJS for the backend, querying a large AWS database.",
    image: "home-away-from-home.png",
    color: "indigo",
    github: "https://github.com/rosewang01/home-away-from-home",
    youtube:
      "https://drive.google.com/file/d/10IDt1ZLOzlN5v3WUti5OkhfkJMypgJ2P/view?usp=sharing",
    tools: ["typescript", "react", "sqlite", "docker"],
    teammates: [
      {
        name: "Bach Tran",
        link: "https://www.linkedin.com/in/giabachtran/",
      },
      {
        name: "Rose Wang",
        link: "https://www.linkedin.com/in/rose-y-wang/",
      },
    ],
  },
  {
    name: "Inventory Management System",
    description: "Warehouse inventory management system.",
    longDescription:
      "An inventory management system created for a warehouse. It allows warehouse operators to track inventory and manage orders. This project uses React for the frontend and Flask for the backend.",
    color: "indigo",
    github: "https://github.com/vincetiu8/inventory-management-system",
    tools: ["typescript", "react", "python", "sqlite"],
  },
  {
    name: "PictoGym",
    description: "Health and fitness social media app.",
    longDescription:
      "A social media app my team created for HoyaHacks 2023. It allows users to plan and post about their workouts with their friends. Users can create workout plans, track their progress, and share their workouts with their friends. This project uses React Native to compile to both iOS and Android.",
    image: "pictogym.png",
    color: "violet",
    github: "https://github.com/vincetiu8/hoyahacks-2023",
    youtube: "https://www.youtube.com/watch?v=NkPd6klkM4M",
    website: "https://devpost.com/software/pictogym",
    tools: ["typescript", "react"],
    teammates: [
      {
        name: "Anya Chan",
        link: "https://www.linkedin.com/in/anyagchan/",
      },
      {
        name: "Lucia Enriquez",
        link: "https://www.linkedin.com/in/lucia-enriquez/",
      },
      {
        name: "Teri Chung",
        link: "https://www.linkedin.com/in/teri-chung0830/",
      },
    ],
  },
  {
    name: "Dance Dance Revolution",
    description: "Interactive dance game with animations and beatmaps.",
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
    description: "On-chain animal adoption marketplace with NFTs and auctions.",
    longDescription:
      "An on-chain animal adoption platform my team created for the TRON Web3 Hackathon 2022. Animal adoption and sponsorship is a notoriously opaque and disconnected process, making it hard to people to easily support local wildlife. Fawna changes this by enabling sponsorship organizations to post animal listings on the platform and users can see these listings and donate to support their chosen animal. After sponsoring an animal, users can name the animal and get a token which can be integrated into other online games, enabling them to play as their animal.",
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
    github: "https://github.com/franklindao-ethsf/eth-proof-of-consensus",
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
    awards: ["SozuHaus Best Hack", "Best Infrastructure Hack on Optimism"],
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
    tools: ["javascript", "react", "python", "flask", "sqlite", "solidity"],
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
    awards: ["Best Smart Cities Hack", "Most Creative Use of Twilio"],
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
    description: "Procedurally-generated bullet hell game using FFTs.",
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
];
