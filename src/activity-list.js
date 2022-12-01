import * as React from "react";
import "./App.css";
import { CategoryItem, ClearCategoriesButton } from "./category-item.js";
import { DecorativeLines } from "./cardcomponents/decorations.js";
import { Description } from "./cardcomponents/description.js";
import { Name } from "./cardcomponents/name.js";
import { Rating } from "./cardcomponents/rating.js";
import { Stamp } from "./cardcomponents/stamp.js";
import { ImageContainer } from "./cardcomponents/imagecontainer.js";
import { Header } from "./header";

export var ActivityList = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header path="/profile">
        <div
          style={{
            height: 20,
            width: 20,
            borderRadius: 20,
            background: "var(--orange)",
          }}
        ></div>
      </Header>
      <div
        style={{
          width: "100vw",
          background: "var(--orange)",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "row",
          alignItems: "flex-start",
          gap: 0,
        }}
      >
        <div
          className="category-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            padding: "0px 0px 6px 0px",
            gap: 25,
            width: "20%",
            overflow: "scroll",
          }}
        >
          <div
            style={{
              width: 300,
            }}
          ></div>
          {/* <ClearCategoriesButton /> */}
          <CategoryItem selected={false} name="aquatic" />
          <CategoryItem selected={false} name="rare" />
          <CategoryItem selected={false} name="nearby" />
          <CategoryItem selected={false} name="trending" />
          <CategoryItem selected={false} name="odd" />
          <CategoryItem selected={false} name="risky" />
          <CategoryItem selected={false} name="musical" />
          <div
            style={{
              width: 300,
            }}
          ></div>
        </div>
        <div
          style={{
            width: "80%",
            display: "flex",
            flexDirection: "row",
            overflowY: "scroll",
            gap: 0,
          }}
        >
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
            <ImageContainer
              imageUrl="https://cdn.utopia.app/editor/sample-assets/flamingo.jpg"
              style={{}}
            />
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
              <Name
                text="Hire a Pool Flamingo as a Butler"
                style={{ padding: 0 }}
              />
              <Rating rating={2} style={{}} color="var(--yellow)" />
            </div>
          </div>
          <div
            style={{
              width: 834,
              height: 767,
              backgroundColor: "var(--orange)",
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
                  color="var(--orange)"
                />
                <Description
                  description="After hearing people rave about them, I just had to go see for myself. They even kept me up at night while I was staying in Iceland."
                  style={{
                    background: "var(--orange)",
                    borderRadius: "0px 0px 0px 20px",
                  }}
                />
              </div>
            </div>
            <ImageContainer imageUrl="https://cdn.utopia.app/editor/sample-assets/northernlights.jpg" />
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 20px 40px 20px",
                alignItems: "flex-end",
                gap: 20,
                height: 120,
                zIndex: 10,
              }}
            >
              <Name
                text="See the Northern Lights"
                style={{
                  padding: 0,
                  textAlign: "left",
                  fontFamily: "var(--primary-basic)",
                }}
              />
              <Rating rating={3} color="var(--orange)" />
            </div>
          </div>
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
                  flexDirection: "row-reverse",
                  justifyContent: "space-between",
                }}
              >
                <Stamp
                  name="08 28 2021"
                  style={{ top: -160, left: 40 }}
                  color="var(--yellow)"
                />
                <Description
                  description="After hearing people rave about them, I just had to go see for myself. They even kept me up at night while I was staying in Iceland."
                  style={{
                    background: "var(--yellow)",
                    borderRadius: "0px 0px 20px 0px",
                  }}
                />
              </div>
            </div>
            <ImageContainer imageUrl="https://cdn.utopia.app/editor/sample-assets/martini.jpg" />

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                margin: "0px 20px 40px 20px",
                alignItems: "flex-end",
                gap: 20,
                height: 120,
                zIndex: 10,
              }}
            >
              <Rating rating={3} color="var(--yellow)" />
              <Name
                text="Drink a Martini on Mount Everestt"
                style={{ padding: 0, textAlign: "left" }}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          height: "80px",
          width: "100%",
          background: "var(--white)",
          zIndex: "100",
          boxShadow: "0px -2px 33px #674168",
        }}
      />
    </div>
  );
};

export default ActivityList;
