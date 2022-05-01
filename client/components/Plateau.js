import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Coord = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "#76ff03",
}));

function Position(props) {
  const { x = 1, y = 1 } = props;
  const xArray = [...Array(x).keys()];
  const yArray = [...Array(y).keys()];

  return (
    <React.Fragment>
      {xArray &&
        yArray &&
        xArray.length > 0 &&
        xArray
          .sort((a, b) => {
            return b - a;
          })
          .map((xPosition) => (
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              key={`x-${xPosition}`}
            >
              {yArray.length > 0 ? (
                yArray.map((yPosition) => (
                  <Grid item xs marginTop={2}>
                    <Coord>Coord {`${xPosition}${yPosition}`}</Coord>
                  </Grid>
                ))
              ) : (
                <Grid item xs>
                  <Coord>Coord</Coord>
                </Grid>
              )}
            </Grid>
          ))}
    </React.Fragment>
  );
}

export default function Plateau() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Position />
    </Box>
  );
}
