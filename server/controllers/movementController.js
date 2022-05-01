const {
  getBounds,
  createRover,
  moveRover,
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

    res.status(201).json({
      data: { rover: movedRover },
      status: "NEW_LOCATION_SET_SUCCESSFULLY",
      message: "the new location was set successfully",
    });
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

exports.runMove = runMove;
