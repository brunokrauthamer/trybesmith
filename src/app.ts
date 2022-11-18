import express from 'express';
import productRoutes from './routes/product.routes';
import orderRoutes from './routes/order.routes';
import userRoutes from './routes/user.routes';
import loginRouter from './routes/login.router';

const app = express();

app.use(express.json());

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
app.use('/users', userRoutes);
app.use('/login', loginRouter);

export default app;
