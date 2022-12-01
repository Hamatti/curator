import { React } from "react";
import { Toggle } from "./Toggle.js";

const styles = {
  border: "1px solid black",
  padding: "1em",
  backgroundColor: "#F8BC0A",
};

export const ModListItem = ({ name, isEnabled, details }) => {
  return (
    <details style={styles}>
      <summary>
        <div className="enabled">
          <Toggle enabled={isEnabled} />
        </div>
        <div className="name">{name}</div>
      </summary>

      <div className="detail-panel">{JSON.stringify(details)}</div>
    </details>
  );
};
