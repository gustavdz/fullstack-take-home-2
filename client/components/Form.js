import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";
import { getNewPosition } from "../services";

function FormRow(props) {
  const { setNewPosition, setNewBounds, setRover } = props;
  const [bounds, setBounds] = useState("5 5");
  const [curLocation, setCurLocation] = useState("1 2 N");
  const [moves, setMoves] = useState("LMLMLMLMM");
  const [result, setResult] = useState();
  const handlerClick = async () => {
    setResult(await getNewPosition({ bounds, curLocation, moves }));
  };

  useEffect(() => {
    if (
      result &&
      result.data &&
      result.status &&
      result.status === "NEW_LOCATION_SET_SUCCESSFULLY"
    ) {
      setNewPosition(result.data.newLocation);
      setNewBounds(result.data.bounds);
      setRover(result.data.rover);
    }
  }, [result]);

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

export default function Form(props) {
  const { setNewPosition, setNewBounds, setRover } = props;
  return (
    <>
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
            <FormRow
              setNewPosition={setNewPosition}
              setNewBounds={setNewBounds}
              setRover={setRover}
            />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
