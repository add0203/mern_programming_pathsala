const userModel = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const passwordHash = async (password) => {
  return await bcrypt.hash(password, salt);
};

const genrateToken = async (userId) => {
  return jwt.sign({ userId: userId }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
};

const signUp = async (req, res) => {
  const { email: email, password: password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        status: 400,
        message: "Email and password are required.",
      });
    }

    const hashedPassword = await passwordHash(password);

    const userCreated = await userModel.create({
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      status: 200,
      user: {
        userData: userCreated,
        Token: await genrateToken(userCreated._id),
        message: "User created successfully!",
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: 500,
      message: error.message || "An error occurred during sign up.",
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({
        status: 400,
        message: "Email and password are required.",
      });
    } else {
      const userExists = await userModel.findOne({ email });

      if (!userExists) {
        return res.status(404).json({
          status: 404,
          message: "User does not exist.",
        });
      } else {
        const hashedPassword = userExists.password;
        const result = await bcrypt.compare(password, hashedPassword);

        if (!result) {
          return res.status(401).json({
            status: 401,
            message: "Unauthorized. Invalid password.",
          });
        }
        const token = await genrateToken(userExists.id);

        res.status(200).json({
          status: 200,
          data: {
            user: userExists,
            token: token,
            message: "User logged in successfully.",
          },
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      status: 500,
      message: error.message || "An error occurred during sign in.",
    });
  }
};

module.exports = {
  signUp,
  login,
};
