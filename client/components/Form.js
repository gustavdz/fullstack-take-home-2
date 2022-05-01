import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { getNewPosition } from "../services";

function FormRow() {
  const [bounds, setBounds] = useState("");
  const [curLocation, setCurLocation] = useState("");
  const [moves, setMoves] = useState("");
  const handlerClick = () => {
    getNewPosition({ bounds, curLocation, moves });
  };
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="outlined-basic"
          label="Bounds"
          variant="outlined"
          value={bounds}
          onChange={(e) => {
            setBounds(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="outlined-basic"
          label="Current Position"
          variant="outlined"
          value={curLocation}
          onChange={(e) => {
            setCurLocation(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="outlined-basic"
          label="Movement"
          variant="outlined"
          value={moves}
          onChange={(e) => {
            setMoves(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Button variant="contained" onClick={handlerClick}>
          Get New Position
        </Button>
      </Grid>
    </>
  );
}

export default function Form() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid
          container
          item
          spacing={2}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <FormRow />
        </Grid>
      </Grid>
    </Box>
  );
}
