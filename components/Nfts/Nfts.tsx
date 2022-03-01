import { useState } from "react";
import { Segment } from "semantic-ui-react";
import { applyFilters } from "../../utils/filtering";
import Filters from "../Filters/Filters";
import Nft from "../Nft/Nft";
import styles from "./movies.module.scss";

export default function Nfts({ nfts }: NftsProps) {
  const [filters, setFilters] = useState<Filter[]>([]);

  let shownNfts = applyFilters(nfts, filters);

  return (
    <>
      <Filters
        {...{
          filters,
          setFilters,
          amountVisible: shownNfts.length,
          amountTotal: nfts.length,
        }}
      />
      <Segment className={styles.segment}>
        <div className={styles.movies}>
          {shownNfts.map((nft) => (
            <Nft key={nft.edition} {...{ nft }} />
          ))}
        </div>
      </Segment>
    </>
  );
}
