const { getBounds, createRover } = require("../service/movementService");

/**
 * @desc    get the new location
 * @route   GET /api/move
 * */
const runMove = (req, res) => {
  try {
    const { bounds, currentLocation, movement } = req.body;
    const coords = getBounds(bounds);
    const rover = createRover(currentLocation);
  } catch (error) {
    res.status(400);
    throw new Error(error);
  }
};

exports.runMove = runMove;
