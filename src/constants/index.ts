import { ColorSet, SidebarLink, SocialLink, Projects, Readers } from "@/types";

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
  {
    route: "/projects",
    label: "Projects",
  },
  {
    route: "/mission",
    label: "Mission",
  },
];

export const socialLinks: SocialLink[] = [
  {
    label: "X",
    url: "https://x.com/ournetwork__",
    icon: "/assets/socials/x.webp",
  },
  {
    label: "Zora",
    url: "https://zora.co/collect/zora:0xaa3d163986e495d13e37b9194961ed62d132ac50",
    icon: "/assets/socials/zora.webp",
  },
];

export const colorGradients: ColorSet[] = [
  {
    gradient: "/assets/blocks/gradient-1.webp",
    block: "/assets/blocks/big-1.webp",
  },
  {
    gradient: "/assets/blocks/gradient-2.webp",
    block: "/assets/blocks/big-2.webp",
  },
  {
    gradient: "/assets/blocks/gradient-3.webp",
    block: "/assets/blocks/big-3.webp",
  },
  {
    gradient: "/assets/blocks/gradient-4.webp",
    block: "/assets/blocks/big-4.webp",
  },
  {
    gradient: "/assets/blocks/gradient-5.webp",
    block: "/assets/blocks/big-5.webp",
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

export const siteMetadata = {
  title: "OurNetwork - Crypto, NFT, DeFi & Web3 Analytics✨",
  description: "The Leading Crypto Analytics Newsletter & Community.",
  baseUrl: "https://ournetwork.xyz",
  name: "OurNetwork",
};
