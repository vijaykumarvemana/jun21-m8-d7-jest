import { app } from './app.js';
import mongoose from 'mongoose';
import list from "express-list-endpoints"

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("Connected to Mongo locally")
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
        console.log(list(app))
    })
})
