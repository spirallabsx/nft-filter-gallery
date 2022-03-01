type Nft = {
  edition: number;
  image: string;
  attributes: [];
};

type Genre = {
  id: number;
  name: string;
};

type NftsProps = {
  nfts: Nft[];
  // genres: Genre[];
};

type Function = (nft: Nft) => boolean;

type Filter = {
  name: string | number;
  group: Group;
  fnc: Function;
};
