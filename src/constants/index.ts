import { ColorSet, SidebarLink, SocialLink, Projects, Readers, Testimonials } from "@/types";

export const sidebarLinks: SidebarLink[] = [
  {
    route: "/",
    label: "Home",
  },
  {
    route: "/contributors",
    label: "Leaderboard",
  },
  {
    route: "/community",
    label: "Community",
  },
  // {
  //   route: "/projects",
  //   label: "Projects",
  // },
  {
    route: "/mission",
    label: "Mission",
  },
  {
    route: "/calendar",
    label: "Calendar",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "Zora",
    url: "https://zora.co/collect/zora:0xaa3d163986e495d13e37b9194961ed62d132ac50",
    icon: "/assets/socials/zora.webp",
  },
];

export const colorGradients: ColorSet[] = [
  {
    gradient: "/assets/blocks/gradient-1.png",
    block: "/assets/blocks/big-1.png",
  },
  {
    gradient: "/assets/blocks/gradient-2.png",
    block: "/assets/blocks/big-2.png",
  },
  {
    gradient: "/assets/blocks/gradient-3.png",
    block: "/assets/blocks/big-3.png",
  },
  {
    gradient: "/assets/blocks/gradient-4.png",
    block: "/assets/blocks/big-4.png",
  },
  {
    gradient: "/assets/blocks/gradient-5.png",
    block: "/assets/blocks/big-5.png",
  },
];

export const projectLogos: Projects[] = [
  {
    label: "ethereum",
    logo: "/assets/logos/ethereum.webp",
  },
  {
    label: "solana",
    logo: "/assets/logos/solana.webp",
  },
  {
    label: "bitcoin",
    logo: "/assets/logos/bitcoin.webp",
  },
  {
    label: "base",
    logo: "/assets/logos/base.webp",
  },
  {
    label: "eigenlayer",
    logo: "/assets/logos/eigenlayer.webp",
  },
  {
    label: "scroll",
    logo: "/assets/logos/scroll.webp",
  },
  {
    label: "celestia",
    logo: "/assets/logos/celestia.webp",
  },
  {
    label: "zksync",
    logo: "/assets/logos/zksync.webp",
  },
  {
    label: "curve",
    logo: "/assets/logos/curve.webp",
  },
  {
    label: "hivemapper",
    logo: "/assets/logos/hivemapper.webp",
  },
  {
    label: "jupiter",
    logo: "/assets/logos/jupiter.webp",
  },
  {
    label: "immutable",
    logo: "/assets/logos/immutable.webp",
  },
  {
    label: "lido",
    logo: "/assets/logos/lido.webp",
  },
  {
    label: "lens",
    logo: "/assets/logos/lens.webp",
  },
];

export const readers: Readers[] = [
  {
    label: "Crypto",
    organizations: [
      {
        name: "coinbase",
        logo: "/assets/logos/coinbase.webp",
      },
      {
        name: "circle",
        logo: "/assets/logos/circle.webp",
      },
      {
        name: "uniswap",
        logo: "/assets/logos/uniswap.webp",
      },
      {
        name: "consensys",
        logo: "/assets/logos/consensys.webp",
      },
      {
        name: "opensea",
        logo: "/assets/logos/opensea.webp",
      },
    ],
  },
  {
    label: "Finance",
    organizations: [
      {
        name: "jpmorgan",
        logo: "/assets/logos/jpmorgan.webp",
      },
      {
        name: "gs",
        logo: "/assets/logos/gs.webp",
      },
      {
        name: "citi",
        logo: "/assets/logos/citi.webp",
      },
      {
        name: "blackrock",
        logo: "/assets/logos/blackrock.webp",
      },
      {
        name: "citadel",
        logo: "/assets/logos/citadel.webp",
      },
    ],
  },
  {
    label: "Tech",
    organizations: [
      {
        name: "google",
        logo: "/assets/logos/google.webp",
      },
      {
        name: "samsung",
        logo: "/assets/logos/samsung.webp",
      },
      {
        name: "uber",
        logo: "/assets/logos/uber.webp",
      },
      {
        name: "meta",
        logo: "/assets/logos/meta.webp",
      },
      {
        name: "amazon",
        logo: "/assets/logos/amazon.webp",
      },
    ],
  },
  {
    label: "Education",
    organizations: [
      {
        name: "penn",
        logo: "/assets/logos/penn.webp",
      },
      {
        name: "utaustin",
        logo: "/assets/logos/utaustin.webp",
      },
      {
        name: "cambridge",
        logo: "/assets/logos/cambridge.webp",
      },
      {
        name: "mit",
        logo: "/assets/logos/mit.webp",
      },
      {
        name: "berkeley",
        logo: "/assets/logos/berkeley.webp",
      },
    ],
  },
  {
    label: "Media",
    organizations: [
      {
        name: "axios",
        logo: "/assets/logos/axios.webp",
      },
      {
        name: "bloomberg",
        logo: "/assets/logos/bloomberg.webp",
      },
      {
        name: "defiant",
        logo: "/assets/logos/defiant.webp",
      },
      {
        name: "wsj",
        logo: "/assets/logos/wsj.webp",
      },
      {
        name: "blockworks",
        logo: "/assets/logos/blockworks.webp",
      },
    ],
  },
];

export const testimonials: Testimonials[] = [
  {
    name: "Chris Burniske",
    link: "https://x.com/cburniske",
    company: "Placeholder",
    image: "/assets/testimonials/cburniske.jpeg",
    comment: "Our Network is a weekly staple for me to review the latest fundamentals for a never-ending rotation of important protocol sectors in crypto.",
  },
  {
    name: "Katie Chase",
    link: "https://www.linkedin.com/in/k-chase",
    company: "Coin Metrics",
    image: "/assets/testimonials/katiechase.jpeg",
    comment: "OurNetwork goes deep into onchain metrics for an incredibly wide range of protocols and apps. Must read for anyone interested in mastering crypto data.",
  },
  {
    name: "Mason Nystrom",
    link: "https://x.com/masonnystrom",
    company: "Variant Fund",
    image: "/assets/testimonials/masonnystrom.jpeg",
    comment: "The best newsletter for onchain alpha.",
  },
  {
    name: "Santiago Santos",
    link: "https://x.com/santiagoroel",
    company: "Angel | Co-Host of Empire",
    image: "/assets/testimonials/santiagosantos.jpeg",
    comment: "OurNetwork is pure alpha",
  },
  {
    name: "Richard Chen",
    link: "https://x.com/richardchen39",
    company: "1confirmation",
    image: "/assets/testimonials/richardchen.jpeg",
    comment: "The best newsletter for onchain data.",
  },
  {
    name: "Lewis Harland",
    link: "https://x.com/_lewisharland_",
    company: "Re7 Capital",
    image: "/assets/testimonials/lewisharland.jpeg",
    comment: "We’re now realizing the potential benefits of distributed research models for distributed networks.",
  },
  {
    name: "Regan Bozman",
    link: "https://x.com/reganbozman",
    company: "Lattice Fund",
    image: "/assets/testimonials/reganbozman.jpeg",
    comment:
      "The team at OurNetwork has collected some of the top mounds in crypto to cut through narrative and highlight what is working onchain. I’ve learned a ton contributing to the community.",
  },
  {
    name: "Andrew Hong",
    link: "https://x.com/andrewhong5297",
    company: "Crypto Data Bytes",
    image: "/assets/testimonials/andrewhong.jpeg",
    comment: "Top 5 crypto data trends of the week, written by top analysts across the ecosystem. Best place to find your alpha by far.",
  },
];

export const siteMetadata = {
  title: "OurNetwork - Crypto, NFT, DeFi & Web3 Analytics✨",
  description: "The Leading Onchain Analytics Newsletter & Community.",
  baseUrl: "https://ournetwork.xyz",
  name: "OurNetwork",
};
