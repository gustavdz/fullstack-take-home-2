import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Button, TextField } from "@mui/material";

function FormRow() {
  return (
    <>
      <Grid item xs={12} sm={6} md={3}>
        <TextField id="outlined-basic" label="Bounds" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField
          id="outlined-basic"
          label="Current Position"
          variant="outlined"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <TextField id="outlined-basic" label="Movement" variant="outlined" />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Button variant="contained">Get Rover</Button>
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
