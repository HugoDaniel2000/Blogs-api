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

module.exports = {
  generate,
};