import React from "react";
import { DecorativeLines } from "./cardcomponents/decorations.js";
import { Description } from "./cardcomponents/description.js";
import { Name } from "./cardcomponents/name.js";
import { Rating } from "./cardcomponents/rating.js";
import { Stamp } from "./cardcomponents/stamp.js";
import { ImageContainer } from "./cardcomponents/imagecontainer.js";

export const Activity = () => {
  return (
    <div
      style={{
        width: 834,
        height: 767,
        backgroundColor: "var(--yellow)",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 63,
          overflow: "visible",
          zIndex: 10,
        }}
      >
        <DecorativeLines />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Stamp
            name="08 28 2021"
            style={{ top: -160, left: 40 }}
            color="var(--yellow)"
          />
          <Description description="Not as attentive as a real Butler, and only being able to hold drinks seems more like a luxury than work. Nonethelesss, we will keep him." />
        </div>
      </div>
      <ImageContainer imageUrl="images/flamingo.jpg" />
      <div
        style={{
          display: "flex",
          flexDirection: "row-reverse",
          margin: "0px 20px 40px 20px",
          alignItems: "flex-end",
          gap: 20,
          height: 120,
          zIndex: 10,
        }}
      >
        <Name text="Hire a Pool Flamingo as a Butler" style={{ padding: 0 }} />
        <Rating rating={2} style={{}} color="var(--yellow)" />
      </div>
    </div>
  );
};
