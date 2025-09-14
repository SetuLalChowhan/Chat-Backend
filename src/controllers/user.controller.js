import User from "../models/User.js";

export async function getRecommendedUsers(req, res) {
  try {
    const currentUserId = req.user.id;
    const currentUser = req.user;

    const recommendedUsers = await User.find({
      $and: [
        { _id: { $ne: currentUserId } },
        { _id: { $nin: currentUser.friends } },
        { isOnboarded: true },
      ],
    }).limit(5);

    res.status(200).json({
      success: true,
      recommendedUsers,
    });
  } catch (error) {
    console.log("Error in getRecommendedUsers", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
export async function getMyFriends(req, res) {
  try {
    const myFriends = await User.findById(req.user.id)
      .select("friends")
      .populate(
        "friends",
        "fullName profilePic nativeLanguage learningLanguage location"
      );
    res.status(200).json({
      success: true,
      myFriends,
    });
  } catch (error) {
    console.log("Error in myfriends", error);
    res.status(500).json({
      message: "Internal Server Error",
    });
  }
}
