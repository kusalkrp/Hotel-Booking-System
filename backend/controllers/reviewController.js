import Tour from "../models/Tour.js";
import Review from "../models/Review.js";

export const createReview = async (req, res) => {
  const tourId = req.params.tourId;
  const newReview = new Review({ ...req.body });
  try {
    const savedReview = await newReview.save();

    // after creating a new review now update the reviews array of the tour
    await Tour.findByIdAndUpdate(tourId, {
      $push: { review: savedReview._id },
    });

    res
      .status(200)
      .json({ succes: true, message: "Review submitted", data: savedReview });
  } catch {
    res.status(500).json({ succes: false, message: "failed to submit" });
  }
};
