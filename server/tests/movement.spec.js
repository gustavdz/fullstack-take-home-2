const {
  createRover,
  moveRover,
  getNewLocation,
  getBounds,
  checkBounds,
} = require("../service/movementService");

describe("Result as expected", () => {
  it("1 2 N - LMLMLMLMM", () => {
    const currentLocation = "1 2 N";
    const movement = "LMLMLMLMM";
    const resultExpected = "1 3 N";

    const rover = createRover(currentLocation);
    const movedRover = moveRover(movement, rover);
    const newLocation = getNewLocation(movedRover);

    expect(newLocation).toEqual(resultExpected);
  });
});

describe("Rover out of bound", () => {
  it("5 5 - 1 2 N - LMMMMMLMLMLMM", () => {
    const bounds = "5 5";
    const currentLocation = "1 2 N";
    const movement = "LMMMMMLMLMLMM";
    const resultExpected = false;

    const coords = getBounds(bounds);
    const rover = createRover(currentLocation);
    const movedRover = moveRover(movement, rover);
    const inBounds = checkBounds(movedRover, coords);

    expect(inBounds).toEqual(resultExpected);
  });
});
