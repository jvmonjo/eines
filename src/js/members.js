import getMembers from './api/members';
const urlParams = new URLSearchParams(window.location.search);
const name = urlParams.get('name');

getMembers(name);