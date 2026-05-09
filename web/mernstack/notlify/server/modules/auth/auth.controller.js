import bcrypt from 'bcryptjs';
import User from './auth.model.js';

export const register = async (req, res) => {
  const { fullName, email, password } = req.body;
  if (!fullName || !email || !password) {
    return res.send({
      status: false,
      message: 'All fields are required',
    });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.send({
        status: false,
        message: 'User already exists with this email',
      });
    }

    // 123, output => $hugiudxgg7893d3d70b.44cd4du0d.d3
    const salt = await bcrypt.genSalt(10);
    const encPass = await bcrypt.hash(password, salt);

    const user = await User.create({
      fullName,
      email,
      password: encPass,
    });

    if (!user) {
      return res.send({
        status: false,
        message: 'Error occurred while registering user',
      });
    }

    return res.send({
      status: true,
      message: 'User registered successfully',
      data: {
        fullName: user.fullName,
        email: user.email,
      },
    });
  } catch (error) {

    console.log("ERR", error)
    return res.send({
      status: false,
      message: 'Error occurred while registering user',
    });
  }
};

export const login = async (req, res) => {};

export const forgotPassword = async (req, res) => {};

export const resetPassword = async (req, res) => {};
