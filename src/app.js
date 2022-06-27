import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routes/products'
import categoryRouter from './routes/categorys';
import authRouter from './routes/auth';
import userRouter from './routes/users';
import contactRouter from './routes/contact';
import order from "./routes/order";
import orderDetails from "./routes/orderDetails";


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

mongoose.connect("mongodb://localhost:27017/web16306")
    .then(() => console.log("Kết nối thành công !"))

app.listen(PORT, () => {
    console.log("Server đang chạy cổng", PORT);
});