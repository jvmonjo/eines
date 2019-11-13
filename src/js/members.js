import getMembers from './api/members';
import handleMenu from './menu';
window.onload = function () {
  handleMenu();
  const urlParams = new URLSearchParams(window.location.search);
  const name = urlParams.get('name');

  getMembers(name);
};