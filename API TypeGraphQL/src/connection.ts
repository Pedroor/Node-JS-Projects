import mongoose, { mongo } from "mongoose";

mongoose.connect("mongodb://localhost/graphqltest", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
