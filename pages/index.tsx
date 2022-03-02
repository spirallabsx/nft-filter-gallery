import { Card } from "semantic-ui-react";
import Nfts from "../components/Nfts/Nfts";
import { getNfts } from "../utils/nfts";

type HomeProps = {
  nfts: Nft[];
};

export default function Home({ nfts }: HomeProps) {
  return <Nfts {...{ nfts }} />;
}

export async function getStaticProps() {
  const nfts = getNfts();
  return {
    props: {
      nfts
    },
  };
}
