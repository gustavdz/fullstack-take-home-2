const cardinalPoints = {
  N: {
    L: "W",
    R: "E",
    M: (x, y) => {
      return { x: x, y: y + 1 };
    },
  },
  E: {
    L: "N",
    R: "S",
    M: (x, y) => {
      return { x: x + 1, y: y };
    },
  },
  S: {
    L: "E",
    R: "W",
    M: (x, y) => {
      return { x: x, y: y - 1 };
    },
  },
  W: {
    L: "S",
    R: "N",
    M: (x, y) => {
      return { x: x - 1, y: y };
    },
  },
};

module.exports = {
  cardinalPoints,
};
