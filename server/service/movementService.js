const { cardinalPoints } = require("../data/cardinalPoints");

const getBounds = (bounds) => {
  const boundsArray = bounds.split(" ");
  const coords = { x: 0, y: 0 };
  coords.x = parseInt(boundsArray[0]);
  coords.y = parseInt(boundsArray[1]);
  return coords;
};

const createRover = (startPos) => {
  const location = {
    x: +startPos.split(" ")[0],
    y: +startPos.split(" ")[1],
    orientation: startPos.split(" ")[2],
  };
  const rover = {
    position: {
      x: location.x,
      y: location.y,
    },
    orientation: location.orientation,
  };
  return rover;
};

const moveRover = (direction, rover) => {
  const directions = direction.split("");
  const movedRover = JSON.parse(JSON.stringify(rover));
  for (const direction of directions) {
    const orientation = movedRover.orientation;
    if (["L", "R"].indexOf(direction) > -1) {
      movedRover.orientation = cardinalPoints[orientation][direction];
    } else {
      movedRover.position = cardinalPoints[orientation][direction](
        movedRover.position.x,
        movedRover.position.y
      );
    }
  }
  return movedRover;
};

module.exports = {
  getBounds,
  createRover,
  moveRover,
};
