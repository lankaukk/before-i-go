import * as React from "react";
import "./App.css";
import { CategoryItem, ClearCategoriesButton } from "./category-item.js";
import { Name } from "./cardcomponents/name.js";
import { ImageContainer } from "./cardcomponents/imagecontainer.js";
import { Link } from "react-router-dom";

export var ActivityList = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "75vh",
        background: "var(--orange)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
      }}
    >
      <div
        className="category-container"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: 25,
          width: "10vw",
          height: "100%",
          overflowY: "scroll",
          overflowX: "hidden",
          borderRight: '1px solid var(--purple)',
          boxShadow: "20px 0px 30px var(--purple)",
          zIndex: 999,
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
          width: "90vw",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          overflowY: "hidden",
          overflowX: "scroll",
          gap: 0,
        }}
      >
        <Link to="/one">
          <div
            style={{
              width: 834,
              height: "100%",
              backgroundColor: "var(--yellow)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <ImageContainer imageUrl="images/flamingo.jpg" alt="flamingo" />
            <Name
              style={{ padding: 30 }}
              text="Hire a Pool Flamingo as a Butler"
            />
          </div>
        </Link>
        <Link to="/two">
          <div
            style={{
              width: 834,
              height: "100%",
              backgroundColor: "var(--orange)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <ImageContainer imageUrl="images/northernlights.jpg" alt="vibes" />
            <Name style={{ padding: 30 }} text="See Theee Northern Ligghtts" />
          </div>
        </Link>
        <Link to="/three">
          <div
            style={{
              width: 834,
              height: "100%",
              backgroundColor: "var(--yellow)",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <ImageContainer imageUrl="images/martini.jpg" alt="vibes" />
            <Name
              style={{ padding: 30 }}
              text="Drink A Martini on Mount Everest"
            />
          </div>
        </Link>
        {/* <div
          style={{
            width: 834,
            height: '100%',
            backgroundColor: "var(--orange)",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              width: "100%",
              height: '100%',
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
          <ImageContainer imageUrl="images/northernlights.jpg" />
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
            height: '100%',
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
          <ImageContainer imageUrl="images/martini.jpg" />

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
        </div> */}
      </div>
    </div>
  );
};

export default ActivityList;
