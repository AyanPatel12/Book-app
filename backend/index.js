import express from 'express';
import { PORT, MONGODB_URL } from './config.js';
import mongoose from 'mongoose';
// import { Book } from './models/bookmodel.js';
import bookRoute from './routes/booksroute.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import contactRoute from './routes/contactRoute.js';

const app = express();

app.use(cors());
app.use(express.json());


app.use('/books',bookRoute);
app.use('/users', userRoutes);
app.use('/contact', contactRoute); // Add the new route

mongoose.connect(MONGODB_URL, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log('App is running on port ' + PORT);
    });
}).catch((error) => {
    console.error('Error connecting to MongoDB:', error);
})