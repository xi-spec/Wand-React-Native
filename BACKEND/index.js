const express = require('express');
const morgan = require('morgan');
const debug = require('debug')('app');
const { connect } = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const userRouter = require('./src/routes/userRoute');
const productRouter = require('./src/routes/productRoute');
const productTypeRouter = require('./src/routes/productTypeRoute');
const authRoute = require('./src/routes/authRoute');

const app = express();
const { HOST } = process.env;
const { PORT } = process.env;

app.use(cors());

connect(process.env.DOBB_URL,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('dev'));
require('./src/passport')(app);

app.use('/api/wand/users', userRouter);
app.use('/api/wand/product', productRouter);
app.use('/api/wand/type', productTypeRouter);
app.use('/auth', authRoute);

app.listen(PORT, () => {
  debug(`Server is running in http://${HOST}:${PORT}`);
});
