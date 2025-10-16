import User from "../models/User.js";
import fs from 'fs';
import imagekit from "../configs/imageKit.js";
import Car from "../models/Car.js";
import Booking from "../models/Booking.js";

// API to Change Role of User
export const changeRoleToOwner = async (req, res) => {
    try {
        const { _id } = req.user;
        await User.findByIdAndUpdate(_id, { role: "owner" })
        res.json({ success: true, message: "Now you can list cars" })
    } catch (error) {
        console.log(error.message);
        res.json({ success: false, message: error.message })
    }
}

// API to List Car
export const addCar = async (req, res) => {
    try {
        //START: for checking file error
        // console.log("req.body:", req.body);
        // console.log("req.file:", req.file);

        // if (!req.file) {
        //     return res.status(400).json({ success: false, message: "File missing in request." });
        // }
        // END:

        const { _id } = req.user;
        let car = JSON.parse(req.body.carData);     // Get data and file info.
        const imageFile = req.file;         // this file will be added using middleware - multer.

        // 1. Read the file into a buffer & convert into 'base64'
        const fileBuffer = fs.readFileSync(imageFile.path);
        const fileBase64 = fileBuffer.toString('base64');       // IMP: error comes because of this.

        // 2. Upload Image to ImageKit
        const response = await imagekit.files.upload({
            file: fileBase64,
            fileName: imageFile.originalname,
            folder: '/cars'
        });

        //START: 1 optimization through imagekit URL transformation
        // IMP: should I have to use imagekit.helper.buildSrc() over imagekit.url()
        // let optimizedImageUrl = imagekit.url()({
        //     path: response.filePath,
        //     transformation: [
        //         { width: 1280 },        // Width resizing
        //         { quality: "auto" },    // Auto compression
        //         { format: "webp" }      // Convert to modern format
        //     ]
        // });
        // const image = optimizedImageUrl;
        // await Car.create({ ...car, owner: _id, image })
        //END: 1

        //START: 2 checking working URL. Use the returned URL!
        // let optimizedImageUrl = response.url;
        // await Car.create({ ...car, owner: _id, image: optimizedImageUrl });
        // END: 2

        // START: 3
        // Build transformation string for ImageKit
        const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT.replace(/\/$/, ''); // Remove trailing slash if any
        const filePath = response.filePath.replace(/^\//, ''); // Remove leading slash if any

        // Build transformation string (see docs)
        const transformationString = "tr:w-1280,q-auto,f-webp";

        // Final optimized URL
        const optimizedImageUrl = `${urlEndpoint}/${transformationString}/${filePath}`;
        // Save to DB
        await Car.create({ ...car, owner: _id, image: optimizedImageUrl });
        // END: 3


        res.json({ success: true, message: "Car Added" });
    } catch (error) {
        console.log("ACTUAL ERROR:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

// API to List Owner Cars
export const getOwnerCars = async (req, res) => {
    try {
        const { _id } = req.user;
        const cars = await Car.find({ owner: _id });
        res.json({ success: true, cars });

    } catch (error) {
        console.log("ACTUAL ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}

// API to Toggle Car Availability
export const toggleCarAvailability = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId);

        // Checking is car belongs to the user
        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "Unauthorized" });
        }

        car.isAvaliable = !car.isAvaliable;
        await car.save();

        res.json({ success: true, message: "Availability Toggled" });

    } catch (error) {
        console.log("ACTUAL ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}

// API to DELETE a car
export const deleteCar = async (req, res) => {
    try {
        const { _id } = req.user;
        const { carId } = req.body;
        const car = await Car.findById(carId);

        // Checking is car belongs to the user
        if (car.owner.toString() !== _id.toString()) {
            return res.json({ success: false, message: "Unauthorized" });
        }

        car.owner = null;
        car.isAvaliable = false;

        await car.save();

        res.json({ success: true, message: "Car Removed" });

    } catch (error) {
        console.log("ACTUAL ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}

// API to get Dashboard Data.
export const getDashboardData = async (req, res) => {
    try {
        const { _id, role } = req.user;
        if (role !== 'owner') {
            return res.json({ success: false, message: "Unauthorized" });
        }

        const cars = await Car.find({ owner: _id });
        const bookings = await Booking.find({ owner: _id }).populate("car").sort({ createdAt: -1 });

        const pendingBookings = await Booking.find({ owner: _id, status: "pending" });
        const completedBookings = await Booking.find({ owner: _id, status: "confirmed" });

        // Calculating monthlyRevenue from bookings where status is 'confirmed'
        const monthlyRevenue = bookings.slice().filter(booking => booking.status === 'confirmed').reduce((total, booking) => total + booking.price, 0);

        const dashboardData = {
            totalCars: cars.length,
            totalBookings: bookings.length,
            pendingBookings: pendingBookings.length,
            completedBookings: completedBookings.length,
            recentBookings: bookings.slice(0, 3),  // last 3 bookings
            monthlyRevenue
        }

        res.json({ success: true, dashboardData });
    } catch (error) {
        console.log("ACTUAL ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}

// API to update user image
export const updateUserImage = async (req, res) => {
    try {
        const { _id } = req.user;

        const imageFile = req.file;   // this file will be added using middleware - multer.

        // 1. Read the file into a buffer & convert into 'base64'
        const fileBuffer = fs.readFileSync(imageFile.path);
        const fileBase64 = fileBuffer.toString('base64');  // IMP: error comes because of this.

        // 2. Upload Image to ImageKit
        const response = await imagekit.files.upload({
            file: fileBase64,
            fileName: imageFile.originalname,
            folder: '/users'
        });

        // START: 3
        // Build transformation string for ImageKit
        const urlEndpoint = process.env.IMAGEKIT_URL_ENDPOINT.replace(/\/$/, ''); // Remove trailing slash if any
        const filePath = response.filePath.replace(/^\//, ''); // Remove leading slash if any

        // Build transformation string (see docs)
        const transformationString = "tr:w-1280,q-auto,f-webp";

        // Final optimized URL
        const optimizedImageUrl = `${urlEndpoint}/${transformationString}/${filePath}`;
        // Save to DB
        await User.findByIdAndUpdate(_id, { image: optimizedImageUrl });
        // END: 3

        res.json({ success: true, message: "Image Updated" });        
    } catch (error) {
        console.log("ACTUAL ERROR:", error);
        res.json({ success: false, message: error.message });
    }
}