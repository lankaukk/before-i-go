import * as React from "react";
// import '/public/globals.css'
import { Star } from "./star.js";
export var Rating = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "25px 20px",
        width: 136,
        height: 302,
        background: "var(--purple)",
        border: "4px solid",
        borderColor: props.color,
        borderRadius: 20,
        margin: "0px 0",
        ...props.style,
      }}
    >
      {Array.from({ length: props.rating ?? 1 }).map(() => {
        return <Star style={{}} color={props.color} />;
      })}
    </div>
  );
};
