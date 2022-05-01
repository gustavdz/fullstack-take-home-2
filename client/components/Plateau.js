import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Coord = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function Position(props) {
  const { x, y } = props;
  const xArray = [...Array(x + 1).keys()].slice(1);
  const yArray = [...Array(y + 1).keys()].slice(1);

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
                  <Grid item xs>
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
      <Position x={5} y={5} />
    </Box>
  );
}
