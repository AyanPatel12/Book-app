import express from 'express';
import { PORT, MONGODB_URL } from './config.js';
import mongoose from 'mongoose';
// import { Book } from './models/bookmodel.js';
import bookRoute from './routes/booksroute.js';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type',],
// }));

// app.get('/', (req, res) => {
//     console.log(req)
//     return res.status('200').send('Hello World');
// })

app.use('/books',bookRoute);
app.use('/users', userRoutes);

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