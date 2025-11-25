// npm init -y
// npm install express cors dotenv jsonwebtoken bcrypt mongoose
// npm install --save-dev nodemon
import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App
const app = express()

// connect database
await connectDB()

// Middleware
app.use(cors());
app.use(express.json());

// Routers
app.get('/', (req, res) => res.send("Server is running"));  // on the webpage
app.use('/api/user', userRouter);
app.use('/api/owner', ownerRouter);
app.use('/api/bookings', bookingRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))  // on the Terminal


//$ npm run server - to start the project.
// By using process.env.PORT || 3000, you create a single codebase that functions seamlessly both locally (on port 3000) and in production environments (using the required dynamic port assigned by services like Heroku, AWS Elastic Beanstalk, or Azure App Service).