import styles from "./movie.module.scss";
import { Icon } from "semantic-ui-react";

type NftProps = {
  nft: Nft;
  // genres: Genre[];
};

export default function Nft({ nft }: NftProps) {
  return (
    <div className={styles.movie}>
      <div className={styles.header}>
        <h2>
          {nft.edition}
        </h2>
        
      </div>
      <div className={styles.description}>
      <img width="200px" src={nft.image}/></div>
      {/* <div className={styles.footer}>
        <div className={styles.tags}>
          {movie.genreIds
            .map((id) => genres.find((g) => g.id === id).name)
            .map((genre) => (
              <span className={styles.genre} key={genre}>
                {genre}
              </span>
            ))}
        </div>
        <div className={styles.votes}>
          votes:
          <span>{movie.votes}</span>
        </div>
      </div> */}
    </div>
  );
}
