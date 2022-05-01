import React from "react";
import WallEImg from "./images/wall-e.png";
import { Typography } from "@mui/material";
import Form from "./components/Form.js";
import Plateau from "./components/Plateau";

function App() {
  return (
    <div className="App" style={{ textAlign: "center" }}>
      <img src={WallEImg} height="200" alt="wall-e robot" />
      <Typography variant="h2" component="h2">
        MARS ROVER
      </Typography>
      <Form />
      <hr />
      <Plateau />
    </div>
  );
}

export default App;
