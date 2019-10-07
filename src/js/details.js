import getDetails from './api/details';
const urlParams = new URLSearchParams(window.location.search);
const slug = urlParams.get('slug');

getDetails(slug);