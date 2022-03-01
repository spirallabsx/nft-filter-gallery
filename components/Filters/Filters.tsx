import { Dispatch, SetStateAction } from "react";
import { Label, Segment } from "semantic-ui-react";
import { Group } from "../../typings/enums";
import { getAllEyeColors, getNftEyeColor, getNftAttributes } from "../../utils/filtering";
import Nft from "../Nft/Nft";
import styles from "./filters.module.scss";
import LabelFilter from "./LabelFilter";
import attributesGlobal from "../../data/attributes.json"


type FiltersProps = {
  filters: Filter[];
  setFilters: Dispatch<SetStateAction<Filter[]>>;
  amountVisible: number;
  amountTotal: number;
};

export default function Filters({
  filters,
  setFilters,
  amountVisible,
  amountTotal,
}: FiltersProps) {
  function filterExists(name: string | number, group: string) {
    return (
      filters.find((f) => f.name === name && f.group === group) !== undefined
    );
  }

  function addFilter(name: string | number, group: string, fnc: Function) {
    setFilters((currentFilters) => [...currentFilters, { name, group, fnc }]);
  }

  function removeFilter(name: string, group: string) {
    setFilters((currentFilters) =>
      currentFilters.filter((f) => !(f.name === name && f.group === group))
    );
  }

  function toggleFilter(name: string | number, group: string, fnc: Function) {
    if (filterExists(name, group)) {
      removeFilter.apply(null, arguments);
    } else {
      addFilter.apply(null, arguments);
    }
  }





// var rows = [];
// for (var x in attributesGlobal){
//   console.log(x);
//   const attributeName = x;
//   rows.push(
//       <div className={styles.row}>
//       {x}
//       {
//         attributesGlobal[x].map((a) => (
//           <LabelFilter
//             key={a}
//             text={a}
//             active={filterExists(a, x)}
//             onClick={() =>
//               toggleFilter(a, x, (n: Nft) => getNftAttributes(n)[x] === a)
//             }
          
//           />
//         ))
//       }

//   </div>)
// }


var rows = [];
const attributeNames = Object.keys(attributesGlobal);
rows = attributeNames.map((aname) => 
    <div key={aname} className={styles.row}>
    {aname}
    {
      attributesGlobal[aname].map((avalue) => (
        <LabelFilter
          key={avalue}
          text={avalue}
          active={filterExists(avalue, aname)}
          onClick={() =>
            toggleFilter(avalue, aname, (n: Nft) => getNftAttributes(n)[aname] === avalue)
          }
        
        />
      ))
    }
    
    </div>
);



  return (

    <Segment>
      <div className={styles.content}>
        <div className={styles.left}>
          {rows}
          {/* <div className={styles.row}>
            Eye Color:
            {
          
            getAllEyeColors().map((eyecolor) => (
              <LabelFilter
                key={eyecolor}
                text={eyecolor}
                active={filterExists(eyecolor, Group.EYECOLOR)}
                onClick={() =>
                  toggleFilter(eyecolor, Group.EYECOLOR, (n: Nft) => getNftAttributes(n)[Group.EYECOLOR] === eyecolor)
                }
              
              />
            ))}
            
          </div> */}
          {/* <div className={styles.row}>
            Genres:
            {[
              { id: 14, name: "Fantasy" },
              { id: 16, name: "Animation" },
              { id: 10751, name: "Family" },
              { id: 27, name: "Horror" },
              { id: 53, name: "Thriller" },
              { id: 35, name: "Comedy" },
              { id: 80, name: "Crime" },
            ].map((genre) => (
              <LabelFilter
                key={genre.name}
                text={genre.name}
                secondaryColor
                active={filterExists(genre.name, Group.GENRE)}
                onClick={() =>
                  toggleFilter(
                    genre.name,
                    Group.GENRE,
                    (m: Movie) => m.genreIds.indexOf(genre.id) !== -1
                  )
                }
              />
            ))}
          </div> */}
        </div>
        <div className={styles.right}>
          <Label size="tiny" className={styles.label}>
            Visible NFTs:
            <Label.Detail>{`${amountVisible} of ${amountTotal}`}</Label.Detail>
          </Label>
        </div>
      </div>
    </Segment>
  );
}
