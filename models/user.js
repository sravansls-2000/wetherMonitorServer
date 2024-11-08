import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    Email: {
      required: true,
      type: String,
      unique: true,
    },
    Password: { required: true, type: String },
  },
  { collection: 'user-data' }
);

const User = mongoose.model('User', userSchema);
export default User;
