import User from '../models/user.js';
import jwt from 'jsonwebtoken';
const registerUser = async (req, res) => {
  const { email, pwd } = req.body;

  try {
    const user = new User({
      Email: email,
      Password: pwd,
    });

    await user.save();
    res.status(200).json({
      status: 'ok',
      msg: 'User Account is created successfully',
    });
  } catch (error) {
    console.log(error);
    res.json({ status: ' Error', Error: 'Duplicate Error' });
  }
};

const loginController = async (req, res) => {
  const { Email, password } = req.body;

  const user = await User.findOne({
    Email,
    Password: password,
  });
  if (user) {
    const token = jwt.sign(
      {
        Email: user.Email,
        pass: user.Password,
      },
      'Sindhu@#123'
    );
    res.status(200).json({ msg: 'Login successfully', user: token });
  } else {
    res.status(400).json({ msg: ' wrong creddentials' });
  }
};
export { registerUser, loginController };
