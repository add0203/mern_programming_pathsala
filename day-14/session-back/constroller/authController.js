const userModel = require("../models/authModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(10);
const passwordHash = async (password) => {
  return await bcrypt.hash(password, salt);
};

const genrateToken = async (userId) => {
  return await jwt.sign({ userId: userId }, "process.env.JWT_SECRET", {
    expiresIn: "90d",
  });
};

const signUp = async (req, res) => {
  const { email: email, password: password } = req.body;

  console.log(password);
  console.log(email);
  try {
    if (!email || !password) {
      res.json({
        status: 401,
        userData: {
          user: "not Created",
        },
      });
    }

    const hashedPassword = await passwordHash(password);

    const userCreated = await userModel.create({
      email,
      password: hashedPassword,
    });

    res.status(200).json({
      user: {
        userData: userCreated,
        // it may be _id : ERROR
        Token: await genrateToken(userCreated._id),
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "fail",
      message: error?.message,
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      res.json({
        status: 401,
        userData: {
          user: "not Created",
        },
      });
    } else {
      const userExists = await userModel.findOne({ email });

      if (!userExists) {
        res.status(404).json({
          status: "user not exist",
        });
      } else {
        const hashedPassword = userExists.password;
        const result = await bcrypt.compare(password, hashedPassword);

        if (!result) {
          res.status(401).json({
            status: "Unauthorized",
          });
        } else {
          res.status(201).json({
            status: "success",
            data: {
              user: userExists,
              token: await genrateToken(userExists.id),
            },
          });
        }
      }
    }
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: error?.message,
    });
  }
};

module.exports = {
  signUp,
  login,
};
