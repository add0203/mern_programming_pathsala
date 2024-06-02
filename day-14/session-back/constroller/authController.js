const userModel = require("../models/authModel");

const signUp = async (req, res) => {
  const { email: email, password: password } = req.body;

  try {
    if (!email || !password) {
      res.json({
        status: 401,
        userData: {
          user: "not Created",
        },
      });
    }

    const userCreated = await userModel.create({
      email,
      password,
    });

    res.json({
      status: 200,
      user: {
        userData: userCreated,
      },
    });
  } catch (error) {
    res.json({
      status: 401,
      Error: {
        error: error,
      },
    });
  }
};

module.exports = {
  signUp,
};
