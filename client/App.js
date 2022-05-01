import React, { useState } from "react";
import WallEImg from "./images/wall-e.png";
import { Typography } from "@mui/material";
import Form from "./components/Form.js";
import Plateau from "./components/Plateau";

function App() {
  const [newPosition, setNewPosition] = useState("");
  const [newBounds, setNewBounds] = useState();

  return (
    <div className="App" style={{ textAlign: "center" }}>
      <img src={WallEImg} height="200" alt="wall-e robot" />
      <Typography variant="h2" component="h2" style={{ marginBottom: 5 }}>
        MARS ROVER
      </Typography>
      <Typography variant="h3" component="h3" style={{ marginBottom: 40 }}>
        New Position:{newPosition}
      </Typography>
      <Form setNewPosition={setNewPosition} setNewBounds={setNewBounds} />
      <Plateau newBounds={newBounds} />
    </div>
  );
}

export default App;
