import * as React from "react";
import { Base } from "./base";
export interface SelectMap {
  changers: (() => void)[];
  onChange: (i: number) => void;
}

const map: SelectMap = {
  changers: [],
  onChange: (curr: number) => {
    map.changers.forEach((handle, i) => {
      if (i !== curr) handle();
    });
  }
};
const ctx = React.createContext(map);

export default function(props: Base) {
  return <ctx.Provider value={map}>{props.children}</ctx.Provider>;
}

export { ctx as SelectionContext };
