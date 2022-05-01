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

module.exports = {
  getBounds,
  createRover,
};
