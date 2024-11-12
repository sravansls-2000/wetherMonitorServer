import User from '../models/user.js';
import jwt from 'jsonwebtoken';
const registerUser = async (req, res) => {
  console.log(req.body);
  const { email, pwd } = req.body;
  console.log(email);
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
        Password: user.Password,
      },
      'Sindhu@#123'
    );
    res.status(200).json({ msg: 'Login successfully', user: token });
  } else {
    res.status(400).json({ msg: ' wrong creddentials' });
  }
};

const matchdetails = async (req, res) => {
  const token = req.headers['X-Auth-Token'];

  try {
    const decoded = jwt.verify(token, 'Sindhu123');
    const Email = decoded.email;
    const user = new User.findOne({ Email });

    res.status(200).json({ MatchDetails: user.MatchDetails });
  } catch (error) {
    res.json({ status: 'error', error: 'invalid token' });
  }
};

const matchdetailsUpdate = async (req, res) => {
  const token = req.headers['X-Auth-Token'];

  try {
    const decoded = jwt.verify(token, 'Sindhu123');
    const Email = decoded.email;
    const user = new User.findOne({ Email });

    res.status(200).json({ MatchDetails: user.MatchDetails });
  } catch (error) {
    res.json({ status: 'error', error: 'invalid token' });
  }
};
export { registerUser, loginController, matchdetails, matchdetailsUpdate };
