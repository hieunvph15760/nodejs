import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './src/routes/products.js'
import categoryRouter from './src/routes/categorys.js';
import authRouter from './src/routes/auth.js';
import userRouter from './src/routes/users.js';
import contactRouter from './src/routes/contact.js';
import order from "./src/routes/order.js";
import orderDetails from "./src/routes/orderDetails.js";


const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', productRouter);
app.use('/api',categoryRouter);
app.use('/api',authRouter);
app.use('/api',userRouter);
app.use('/api',contactRouter);
app.use('/api',order);
app.use("/api",orderDetails);

const PORT = 3002;

mongoose.connect("mongodb+srv://hieuuchiha:ahieu2k2@cluster0.bvkxfg9.mongodb.net/Phonestore")
    .then(() => console.log("Kết nối thành công !"))

app.listen(PORT, () => {
    console.log("Server đang chạy cổng", PORT);
});