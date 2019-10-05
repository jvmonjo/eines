const axios = require('axios');

export default function getQuote() {
  axios.get('https://got-quotes.herokuapp.com/quotes')
    .then(function (response) {
      // console.log(response.data)
      const blockquote = document.getElementById('quote')
      blockquote.innerHTML = response.data.quote
      const cite = document.getElementById('cite')
      cite.innerHTML = response.data.character
    })
    .catch(function (error) {
      console.log(error);
    })
}