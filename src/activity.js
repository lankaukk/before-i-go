import React from "react";
import { DecorativeLines } from "./cardcomponents/decorations.js";
import { Description } from "./cardcomponents/description.js";
import { Name } from "./cardcomponents/name.js";
import { Rating } from "./cardcomponents/rating.js";
import { Stamp } from "./cardcomponents/stamp.js";
import { ImageContainer } from "./cardcomponents/imagecontainer.js";

import { Form } from "react-router-dom";
import { activites } from "./data";

export const Activity = () => {
  const activity = {
    name: "Hire a Pool Flamingo as a Butler",
    date: "08 28 2019",
    description:
      "Not as attentive as a real Butler, and only being able to hold drinks seems more like a luxury than work. Nonethelesss, we will keep him.",
    imageUrl: "/images/flamingo.jpg",
    rating: 5,
  };

  return (
    <div
      id="activity"
      style={{
        width: 834,
        height: "100%",
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
            name={activity.date}
            style={{ top: -160, left: 40 }}
            color="var(--yellow)"
          />
          <Description description={activity.description} />
        </div>
      </div>
      <ImageContainer imageUrl={activity.imageUrl} />
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
        <Name text={activity.name} />
        <Rating rating={activity.rating} color="var(--yellow)" />
      </div>
    </div>
  );
};

function Favorite({ contact }) {
  // yes, this is a `let` for later
  let favorite = contact.favorite;
  return (
    <Form method="post">
      <button
        name="favorite"
        value={favorite ? "false" : "true"}
        aria-label={favorite ? "Remove from favorites" : "Add to favorites"}
      >
        {favorite ? "★" : "☆"}
      </button>
    </Form>
  );
}

export default Activity;

// export const DemoContact = () => {
//   return (
//     <div id="activity">
//       <div>
//         <img
//           key={contact.avatar}
//           src={contact.avatar || null}
//         />
//       </div>

//       <div>
//         <h1>
//           {contact.first || contact.last ? (
//             <>
//               {contact.first} {contact.last}
//             </>
//           ) : (
//             <i>No Name</i>
//           )}{" "}
//           <Favorite contact={contact} />
//         </h1>

//         {contact.twitter && (
//           <p>
//             <a
//               target="_blank"
//               href={`https://twitter.com/${contact.twitter}`}
//             >
//               {contact.twitter}
//             </a>
//           </p>
//         )}

//         {contact.notes && <p>{contact.notes}</p>}

//         <div>
//           <Form action="edit">
//             <button type="submit">Edit</button>
//           </Form>
//           <Form
//             method="post"
//             action="destroy"
//             onSubmit={(event) => {
//               if (
//                 !confirm(
//                   "Please confirm you want to delete this record."
//                 )
//               ) {
//                 event.preventDefault();
//               }
//             }}
//           >
//             <button type="submit">Delete</button>
//           </Form>
//         </div>
//       </div>
//     </div>
//   );
// };
