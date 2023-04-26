const { User } = require("../models");

exports.viewProfile = async (req, res, next) => {
  try {
    const userid = req.user.id;
    console.log(userid);
    const profile = await User.findOne({
      where: { id: userid }
    });
    res.status(200).json(profile);
  } catch (err) {}
};
