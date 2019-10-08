import getDetails from './api/details';
import handleMenu from './menu'
handleMenu()
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

getDetails(slug);