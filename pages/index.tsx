import { Card } from "semantic-ui-react";
import Movie from "../components/Nft/Nft";
import Test from "../components/Nft/Nft";
import Nfts from "../components/Nfts/Nfts";
import { getNfts } from "../utils/nfts";

type HomeProps = {
  nfts: Nft[];
  // genres: Genre[];
};

export default function Home({ nfts }: HomeProps) {
  return <Nfts {...{ nfts }} />;
}

export async function getStaticProps() {
  const nfts = getNfts();
  // const genres = getGenres();
  return {
    props: {
      nfts
    },
  };
}
