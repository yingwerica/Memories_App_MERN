//import dependencies
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';

//import routes
import postRoutes from './routes/posts.js';

//initial app that we can use all the methods
const app = express();

//set up bodyParser to send request properly.
app.use(bodyParser.json({limit: "30mb", extended: true})); //make sure when we send image, send with limited size.
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes);

//connect to mongoDB
const MONGO_URI='mongodb+srv://Yingw:erica2db@cluster0.y06paec.mongodb.net/memories?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.set('strictQuery', true); //remove deprication warnings
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
.catch((err) => console.log(err));

