import Tour from "../models/Tour.js";

//create new tour
export const createTour = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const savedTour = await newTour.save();
    res.status(200).jason({
      success: true,
      message: "Successully created",
      data: savedTour,
    });
  } catch {
    res.status(500).jason({
      success: false,
      message: "Failed to create.Try again",
    });
  }
};
