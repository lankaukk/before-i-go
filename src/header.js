import React from "react";
import { Link } from "react-router-dom";

export var Header = (props) => {
  return (
    <div
      style={{
        width: "100%",
        background: "var(--white)",
        zIndex: 100,
        display: "flex",
        flexDirection: "column",
        
        padding: "44px 0px",
        gap: 20,
        boxShadow: "0px 5px 30px #10629290",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0px 50px",
          
        }}
      >
        <div
          style={{
            color: "var(--orange)",
            fontFamily: "var(--primary)",
            textAlign: "center",
            fontWeight: 400,
            fontStyle: "normal",
            border: "0px solid rgb(255, 174, 52, 1)",
            fontSize: "22px",
            textShadow: "0px 1px 1px #646464, 0px 4px 1px rgba(0, 0, 0, 0.25)",
          }}
        >
          Things I want to do
        </div>
        <Link to={props.path}>{props.children}</Link>
      </div>
      <div
        style={{
          color: "var(--orange)",
          fontFamily: "var(--primary)",
          fontWeight: 400,
          fontStyle: "normal",
          border: "0px solid rgb(255, 174, 52, 1)",
          fontSize: "72px",
          lineHeight: "125%",
          textShadow: "0px 1px 1px #646464, 0px 8px 1px rgba(0, 0, 0, 0.25)",
          padding: "0px 50px",
        }}
      >
        BBeffore I Go
      </div>
    </div>
  );
};
