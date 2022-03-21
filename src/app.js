import express from 'express';
import mongoose from 'mongoose';
import productRouter from './routes/products'
import categoryRouter from './routes/categorys';
const app = express();
app.use(express.json());

app.use('/api', productRouter);
app.use('/api',categoryRouter);
mongoose.connect("mongodb://localhost:27017/web16306")
    .then(() => console.log("Kết nối thành công !"))
const PORT = 3001;
app.listen(PORT, () => {
    console.log("Server đang chạy cổng", PORT);
});