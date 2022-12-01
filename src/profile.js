import React from "react";
import { UserProPic } from "./svgs.js";
import {
  AquaMan,
  Wonderer,
  BirbWatcher,
  Mixologist,
  Tropicologist,
  RiskTaker,
  Cryophile,
} from "./stickers.js";
import { DecorativeLines, Checkerboard } from "./cardcomponents/decorations.js";

export const Profile = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <div
        style={{
          height: "100%",
          display: "flex",
          flexDirection: "row",
          background: "var(--orange)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "40px",
            width: "30vw",
          }}
        >
          <UserProPic
            style={{
              borderRadius: "50%",
              border: "6px solid var(--purple)",
              overflow: "hidden",
              background: "var(--orange)",
              position: "relative",
              width: 160,
              height: 160,
            }}
            color="var(--purple)"
          />

          <div
            style={{
              color: "var(--purple)",
              fontFamily: "primary",
              fontSize: "38px",
            }}
          >
            McKayyyla Lannkau
          </div>

          <div
            style={{
              fontFamily: "var(--secondary)",
              color: "var(--purple)",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "144%",
              marginBottom: 5,
              position: "relative",
              height: 26,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Primary Location: </div>
            <div>New York City, USA</div>
          </div>
          <div
            style={{
              fontFamily: "var(--secondary)",
              color: "var(--purple)",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "144%",
              marginBottom: 5,
              position: "relative",
              height: 26,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Living Since: </div>
            <div>1999</div>
          </div>
          <div
            style={{
              fontFamily: "var(--secondary)",
              color: "var(--purple)",
              fontWeight: 700,
              fontSize: 18,
              lineHeight: "144%",
              marginBottom: 5,
              position: "relative",
              height: 26,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div>Life Level: </div>
            <div>Advanced</div>
          </div>
        </div>
        <Checkerboard
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 40,
            padding: 40,
            alignSelf: "stretch",
            height: "85%",
            width: "50vw",
          }}
          color1="var(--yellow)"
          color2="var(--orange)"
        >
          <Cryophile
            style={{
              boxShadow: "0px 2px 4px 5px rgb(0, 0, 0, 0.12)",
              borderRadius: "50%",
              zIndex: 999,
            }}
          />
          <BirbWatcher
            style={{
              width: 121,
              boxShadow: "0px 2px 4px 5px rgb(0, 0, 0, 0.12)",
              padding: "10px 0px 10px 10px",
            }}
          />
          <RiskTaker
            style={{
              boxShadow: "0px 2px 4px 5px rgb(0, 0, 0, 0.12)",
              transform: "rotate(42deg)",
              borderRadius: "5px",
            }}
          />
          <Mixologist
            style={{
              transform: "rotate(5deg)",
              boxShadow: "0px 2px 4px 5px rgb(0, 0, 0, 0.12)",
              padding: "5px 0",
            }}
          />
          <AquaMan
            style={{
              borderRadius: "50%",
              boxShadow: "0px 2px 4px 5px rgb(0, 0, 0, 0.12)",
            }}
          />
          <Wonderer
            style={{
              transform: "rotate(-15deg)",
              boxShadow: "0px 2px 4px 5px rgb(0, 0, 0, 0.12)",
              borderRadius: "0 0 30% 30% ",
            }}
          />
          <Tropicologist
            style={{
              borderRadius: "30px 30px 0 0",
              boxShadow: "0px 2px 4px 5px rgb(0, 0, 0, 0.12)",
              paddingTop: 5,
            }}
          />
        </Checkerboard>
      </div>
    </div>
  );
};

export default Profile;
