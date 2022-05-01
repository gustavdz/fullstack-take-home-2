import React, { useEffect } from "react";
import { styled } from "@mui/material/styles";
import { keyframes } from "@mui/system";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

const blink = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Coord = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1A2027",
  ...theme.typography.body2,
  padding: theme.spacing(0),
  textAlign: "center",
  color: "#76ff03",
}));

const BlinkingText = styled(Typography)(({ theme }) => ({
  animation: `${blink} 1s linear infinite`,
}));

function Position(props) {
  const { x = 1, y = 1, rover = {} } = props;
  const xArray = [...Array(x).keys()];
  const yArray = [...Array(y).keys()];

  return (
    <React.Fragment>
      {xArray &&
        yArray &&
        yArray.length > 0 &&
        yArray
          .sort((a, b) => {
            return b - a;
          })
          .map((yPosition) => (
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="center"
              alignItems="center"
              key={`y-${yPosition}`}
            >
              {xArray.length > 0 &&
                xArray.map((xPosition) => (
                  <Grid item xs marginTop={2}>
                    {rover &&
                    rover.orientation &&
                    rover.orientation !== "" &&
                    ![null, "", false].includes(rover.position?.x) &&
                    ![null, "", false].includes(rover.position?.y) &&
                    rover.position.x + 1 === xPosition + 1 &&
                    rover.position.y + 1 === yPosition + 1 ? (
                      <Coord>
                        <BlinkingText>
                          {rover.orientation === "N"
                            ? "^"
                            : rover.orientation === "S"
                            ? "V"
                            : rover.orientation === "E"
                            ? ">"
                            : "<"}
                        </BlinkingText>
                      </Coord>
                    ) : (
                      <Coord>{`coord(${xPosition},${yPosition})`}</Coord>
                    )}
                  </Grid>
                ))}
            </Grid>
          ))}
    </React.Fragment>
  );
}

export default function Plateau(props) {
  const { newBounds, rover } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Position x={newBounds?.x || 1} y={newBounds?.y || 1} rover={rover} />
    </Box>
  );
}
