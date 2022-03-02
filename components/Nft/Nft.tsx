import styles from "./movie.module.scss";
import { Icon } from "semantic-ui-react";

type NftProps = {
  nft: Nft;
};

// NFT component that renders edition (#) and image of a single NFT object  
export default function Nft({ nft }: NftProps) {
  return (
    <div className={styles.movie}>
      <div className={styles.header}>
        <h2>
          {nft.edition}
        </h2>
        
      </div>
      <div className={styles.description}>
      <img width="200px" src={nft.image}/>
      </div>
    </div>
  );
}
