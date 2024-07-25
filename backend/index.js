require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const User = require('./models/User');

const app = express();
const port = process.env.PORT |3000;

// Connect to MongoDB
mongoose.connect(process.env.Mongodb_Uri, {useNewUrlParser: true})
.then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Set up multer for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Endpoint to handle form submission
app.post('/submit', upload.single('file'), async (req, res) => {
    try {
        const { name, address, email } = req.body;
        const filePath = req.file.path;
console.log(req)
        const newUser = new User({
            name,
            address,
            email,
            filePath
        });

        await newUser.save();

        res.send('Form data and file uploaded successfully!');
    } catch (err) {
        res.status(500).send('Error uploading file and form data');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
