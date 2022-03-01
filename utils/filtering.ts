import { Group } from "../typings/enums";
import attributes from "../data/attributes.json";

export const getAttributeNames = () => {
  return Object.keys(attributes);
};

export const getAttributes = () => {
  return attributes;
};

export const getAllEyeColors = () => {
  return attributes["Eye color"];
};

// export function getNftAttributeValue(nft: Nft) {
//   // let nftAttributes = [];
//   const nftAttributes = nft.attributes;
//   return nftAttributes;
// }

export function getNftEyeColor(nft: Nft) {
  let nftAttributesEye = {};
  nftAttributesEye = nft.attributes.flat()
  return nftAttributesEye[2].value;
}

export function getNftAttributes(nft: Nft) {
  let nftAttributesData = [];
  nftAttributesData = nft.attributes;
  const nftAttributeNames = nftAttributesData
    .map((n) => n.trait_type);
  
  const nftAttributeValues = nftAttributesData
    .map((n) => n.value);

  const nftAttributes = {};
  for (var x in nftAttributeNames) {
    nftAttributes[nftAttributeNames[x]] = nftAttributeValues[x];
  }
  return nftAttributes;
}

function isShownByAttributeName(nft: Nft, filters: Filter[], attributeName: string) {
  const attributeFilters = filters.filter((filter) => filter.group === attributeName);

  if (!attributeFilters.length) return true;
  return attributeFilters.some((filter) => filter.fnc(nft));
}



function isShownByEyeColor(nft: Nft, filters: Filter[]) {
  const eyeColorFilters = filters.filter((filter) => filter.group === Group.EYECOLOR);
  if (!eyeColorFilters.length) return true;
  return eyeColorFilters.some((filter) => filter.fnc(nft));
}


export function applyFiltersOld(nfts: Nft[], filters: Filter[]) {
  return nfts.filter((nft) => {
    const showByEyeColor = isShownByEyeColor(nft, filters);
    return showByEyeColor;
  });
}

export function applyFilters(nfts: Nft[], filters: Filter[]) {
  return nfts.filter((nft) => {
    var showByAttributeName = true;
    const attributeNames = getAttributeNames();
    for (var x in attributeNames){
        var checkIfFiltered = isShownByAttributeName(nft, filters, attributeNames[x]);
        if (!checkIfFiltered){
          showByAttributeName = false;
        }
    }
    return showByAttributeName;
    })}


