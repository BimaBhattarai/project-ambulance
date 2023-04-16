const mongoose = require('mongoose');
exports.allGuest = async (req, res) => {
    const keyword = req.query.search
      ? {
          $or: [
            { name: { $regex: req.query.search, $options: "i" } },
            { email: { $regex: req.query.search, $options: "i" } },
          ],
        }
      : {};
  
    const guest = await GuestRegister.find(keyword).find({ _id: { $ne: req.user._id } });
    res.send(users);
  };

const Schema =  mongoose.Schema;