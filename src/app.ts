import express from 'express';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

export default app;
