import { React } from "react";
import { ModListItem } from "./ModListItem";

export const ModList = ({ mods }) => {
  return (
    <div>
      {mods.map((mod) => {
        return (
          <ModListItem
            isEnabled={mod.enabled}
            name={mod.name}
            details={mod.manifest}
            key={mod.name}
          />
        );
      })}
    </div>
  );
};
