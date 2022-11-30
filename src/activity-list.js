import * as React from "react";
import "./App.css";
import { CategoryItem, ClearCategoriesButton } from "./category-item.js";
import { DecorativeLines } from "./cardcomponents/decorations.js";
import { Description } from "./cardcomponents/description.js";
import { Name } from "./cardcomponents/name.js";
import { Rating } from "./cardcomponents/rating.js";
import { Stamp } from "./cardcomponents/stamp.js";
import { ImageContainer } from "./cardcomponents/imagecontainer.js";

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
      <div
        style={{
          width: "100%",
          background: "var(--white)",
          zIndex: "100",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "44px 0px 25px",
          gap: "26px",
          boxShadow: "0px 2px 33px #674168",
          left: 0,
        }}
      >
        <div
          style={{
            width: "100%",
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
        <div>
          <div
            style={{
              width: '110vw',
              color: "var(--orange)",
              fontFamily: "var(--primary)",
              textAlign: "center",
              fontWeight: 400,
              fontStyle: "normal",
              border: "0px solid rgb(255, 174, 52, 1)",
              fontSize: "72px",
              lineHeight: "125%",
              textShadow:
                "0px 1px 1px #646464, 0px 8px 1px rgba(0, 0, 0, 0.25)",
            }}
          >
            BBBBeffforeee I GGo...
          </div>
        </div>
        <div
          className="category-container"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            padding: "0px 0px 6px 0px",
            gap: 25,
            width: '100vw',
            overflow: "scroll",
          }}
        >
          <div style={{
            width: 300
          }}></div>
          <ClearCategoriesButton />
          <CategoryItem selected={false} name="aquatic" />
          <CategoryItem selected={false} name="rare" />
          <CategoryItem selected={false} name="nearby" />
          <CategoryItem selected={false} name="trending" />
          <CategoryItem selected={false} name="odd" />
          <CategoryItem selected={false} name="risky" />
          <CategoryItem selected={false} name="musical" />
          <CategoryItem selected={false} name="remote" />
          <CategoryItem selected={false} name="basic" />
          <CategoryItem selected={false} name="futuristic" />
          <CategoryItem selected={false} name="ceremonial" />
          <CategoryItem selected={false} name="sacrificial" />
          <div style={{
            width: 300
          }}></div>
        </div>
      </div>
      <Stamp
        name="06 05 2022"
        style={{
          position: "absolute",
          top: 342,
          left: 964,
          zIndex: 1000,
        }}
        color="var(--yellow)"
      />
      <div
        style={{
          width: "100vw",
          background: "var(--orange)",
          overflowY: "scroll",
          display: "flex",
          flexDirection: "column",
          alignItems: 'center',
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
          {/* <Mixologist
            className="burst"
            style={{
              position: "absolute",
              left: 208,
              top: 2179,
              animationDelay: ".4s",
            }}
          />
          <Cryophile
            className="burst"
            style={{
              position: "absolute",
              left: 136,
              top: 2107.5,
            }}
          /> */}
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
