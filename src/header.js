import React from "react";

export const Header = (props) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row'}}>
      {props.children}
      <div
        style={{
          width: "90vw",
          height: '15vh',
          background: "var(--white)",
          zIndex: 100,
          display: "flex",
          flexDirection: "column",
          padding: "44px 0px",
          gap: 20,
          boxShadow: "0px 0px 30px var(--purple)",
          alignItems: "flex-start",
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
            padding: "0px 50px",
          }}
        >
          Things I want to do
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
          BBBeffore I Go
        </div>
      </div>
    </div>
  );
};
