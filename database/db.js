import mongoose from "mongoose";

export const connectdb = () => {
  mongoose
    .connect(`${process.env.MONGO_URI}`)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error);
    });
};
