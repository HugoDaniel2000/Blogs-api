require('dotenv/config');
const JWT = require('jsonwebtoken');

const generate = (payload) => (
new Promise((resolve) => {
  JWT.sign(payload, process.env.JWT_SECRET,
   { expiresIn: '1d',
     algorithm: 'HS256',
   },
   (err, token) => {
     if (err) {
       throw new Error('ERR_INVALID_TOKEN');
     }
     resolve(token);
     });
   })
 );

 const verificateToken = (token) => (
  new Promise((resolve) => {
    JWT.verify(token, process.env.JWT_SECRET,
     (err, decoded) => {
       if (err) {
         resolve({ auth: false });
        }
       resolve({ auth: true, payload: decoded.payload });
       });
     })
   );

module.exports = {
  generate,
  verificateToken,
};