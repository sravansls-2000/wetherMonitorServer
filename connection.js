import mongoose from 'mongoose';

const Connection = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://sravan:Sindhu@cricketgame.55ypp.mongodb.net/?retryWrites=true&w=majority&appName=cricketGame',
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    );
    console.log('database connected ');
  } catch (error) {
    console.log('databse connection error', error);
  }
};

export default Connection;
