require('dotenv').config();
const express = require('express');
const userRouter = require('./routers/userRoutes');
const loginRouter = require('./routers/loginRouter');
const error = require('./middlewares/error');

const app = express();
app.use(express.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use(error);

app.listen(process.env.PORT, () => console.log('ouvindo porta 3000!'));