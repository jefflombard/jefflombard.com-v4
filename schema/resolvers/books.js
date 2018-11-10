const axios = require('axios');
const convert = require('xml-js');

// const booksResolver = () => new Promise((resolve) => {
//   const params = {
//     key: process.env.GOODREADS_KEY,
//   };
//   axios.get('https://www.goodreads.com/user/show/', params)
//     .then( res => {
//       console.log(JSON.stringify(res.data));
//     })
//     .catch( err => {
//       console.log(err);
//     });
//
//   resolve([{ id: '1' }]);
// });
//
// booksResolver();

// module.exports = booksResolver;

var dates = Date.parse("Thu, 11 Oct 2018 00:36:01 GMT");
var stss = new Date(dates);
var datestring = `${stss.getDay()}.${stss.getMonth()}.${stss.getFullYear()}`

console.log(datestring);

