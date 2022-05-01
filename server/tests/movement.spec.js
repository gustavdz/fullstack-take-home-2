const {
  createRover,
  moveRover,
  getNewLocation,
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
