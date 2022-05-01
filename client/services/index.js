import axiosClient from "../axiosClient";
export const getNewPosition = async (body) => {
  const { bounds, curLocation: currentLocation, moves: movement } = body;
  const response = await axiosClient.post("/move", {
    bounds,
    currentLocation,
    movement,
  });

  return response.data;
};
