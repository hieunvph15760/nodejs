import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import productRouter from './routes/products'
import categoryRouter from './routes/categorys';
import userRouter from './routes/auth';
const app = express();
app.use(express.json());
app.use(cors());

app.use('/api', productRouter);
app.use('/api',categoryRouter);
app.use('/api',userRouter);

mongoose.connect("mongodb://localhost:27017/web16306")
    .then(() => console.log("Kết nối thành công !"))
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server đang chạy cổng", PORT);
});