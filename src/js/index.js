import getQuote from './api/quote'
import handleMenu from './menu'
window.onload = function () {
  handleMenu()
  getQuote()
}