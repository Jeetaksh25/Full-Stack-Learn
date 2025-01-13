const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config(); 

const app = express();

app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://manojjeetakshluhaniwal25:NWcovqsBdTHhACyo@cluster0.imw1n.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";  
mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("Connected to MongoDB!"))
    .catch((err) => console.error("Failed to connect to MongoDB:", err));

app.get('/', (req, res) => {
    res.send('This is the backend server!');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
