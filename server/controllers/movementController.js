const {
  getBounds,
  createRover,
  moveRover,
  checkBounds,
  getNewLocation,
} = require("../service/movementService");

/**
 * @desc    get the new location
 * @route   GET /api/move
 * */
const runMove = (req, res) => {
  try {
    const { bounds, currentLocation, movement } = req.body;
    const coords = getBounds(bounds);
    const rover = createRover(currentLocation);
    const movedRover = moveRover(movement, rover);
    const inBounds = checkBounds(movedRover, coords);
    if (!inBounds) {
      res.status(400).json({
        data: null,
        status: "ROVER_OUT_OF_BOUNDS",
        message: "rover is out of bounds.",
      });
    }

    const newLocation = getNewLocation(movedRover);

    res.status(201).json({
      data: { newLocation, rover: movedRover, bounds: coords },
      status: "NEW_LOCATION_SET_SUCCESSFULLY",
      message: "the new location was set successfully",
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

exports.runMove = runMove;
