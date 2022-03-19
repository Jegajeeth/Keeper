import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import note from "../notes.js";

function App() {
  return (
    <div>
      <Header />
      {note.map((n) => (
        <Note name={n.title} cont={n.content} key={n.key} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
