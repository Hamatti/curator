import { React } from "react";

export const Toggle = ({ enabled }) => {
  return <input type="checkbox" checked={enabled}></input>;
};
