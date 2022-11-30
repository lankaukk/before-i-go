/** @jsx jsx */
import { jsx } from "@emotion/react";
import { useState } from "react";

export var CategoryItem = (props) => {
  const [selected, setSelected] = useState();

  return (
    <div
      onClick={() => setSelected(!selected)}
      css={{ "&:hover": { opacity: 0.7 } }}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        padding: "0px 22px",
        boxShadow: "0px 6px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: "50px",
        border: "4px solid var(--purple)",
        userSelect: "none",
        cursor: "pointer",
        backgroundColor: selected ? "var(--white)" : "var(--purple)",
        ...props.style,
      }}
    >
      <p
        style={{
          fontFamily: "var(--secondary)",
          fontSize: "16px",
          fontWeight: "700",
          textTransform: "uppercase",
          color: selected ? "var(--purple)" : "var(--white)",
        }}
      >
        {props.name}
      </p>
    </div>
  );
};

export var ClearCategoriesButton = (props) => {
  return (
    <div
      css={{ "&:hover": { opacity: 0.7 } }}
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "helvetica",
        textTransform: "uppercase",
        textAlign: "center",
        boxShadow: "0px 6px 1px rgba(0, 0, 0, 0.25)",
        borderRadius: "50px",
        border: "4px solid var(--purple)",
        backgroundColor: "var(--white)",
        color: "var(--purple)",

        //overflow: "hidden",
        width: "53.5px",
        height: "53.5px",
        // padding: "0px 18px",
        userSelect: "none",
        cursor: "pointer",

        fontSize: 100,
      }}
    >
      <div
        style={{
          overflow: "hidden",
          width: "53.5px",
          height: "53.5px",
          borderRadius: "50px",
          padding: "5px 0 0 3px",
        }}
      >
        <svg
          //   width="53.5"
          //   height="53.5"
          viewBox="0 53.5 53.5"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M22.4531 26.3826L-4.28696 53.1226L-7.5 50.7401L19.6553 23.5848L-4.54693 -0.617489L-1.33389 -3L22.4531 20.787L46.2401 -3L49.4532 -0.617489L25.2509 23.5848L52.4062 50.7401L49.1932 53.1226L22.4531 26.3826Z"
            fill="var(--purple)"
          />
        </svg>
      </div>
    </div>
  );
};
