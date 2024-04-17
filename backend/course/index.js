const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { connectDB } = require('./config/db'); 
const { authenticate } = require('./middleware/authenticate'); // Import authentication middleware
const userRoutes = require('./routes/userRoutes'); // Import user routes

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());


connectDB();

app.use('/api/users', userRoutes); 


app.get('/', (req, res) => {
  res.send('Welcome to the backend server!');
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something went wrong!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
