import React from "react";

function Note(probs) {
  return (
    <div className="note">
      <h1>{probs.name}</h1>
      <p>{probs.cont}</p>
    </div>
  );
}

export default Note;
