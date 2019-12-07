import axios from 'axios';

export default function getMembers(house) {
  axios
    .get(`https://api.got.show/api/book/characters/byHouse/${house}`)
    .then(function(response) {
      // console.log(response.data);
      const members = response.data;
      document.title = `${house} | Treball assignatura Eines HTML i CSS`;
      const title = document.getElementById('title');
      title.innerHTML = house;
      const escut = document.getElementById('escut');
      const n = house.split(' ');
      const houseId = n[n.length - 1];
      // marquem l'element del menúcom a actiu
      const menu = document.getElementById(`menu-${houseId}`);
      menu.className = 'active';

      // canviem la imatge placeholder per la corresponent
      escut.src = `/assets/img/${houseId}.svg`;
      const toAdd = document.createDocumentFragment();

      // creem els elements de la categoria
      for (const member of members) {
        const li = document.createElement('li');
        li.className = 'member';
        const a = document.createElement('a');
        a.href = `/details/?slug=${member.slug}`;
        const h3 = document.createElement('h3');
        const img = document.createElement('img');
        const imageWrapper = document.createElement('div');
        imageWrapper.className = 'image-wrapper';
        img.src = member.image || '/assets/img/anonim.svg';
        const gender = document.createElement('span');
        gender.className =
          member.gender === 'male' ? 'fas fa-mars' : 'fas fa-venus';
        const dead = document.createElement('span');
        dead.className = member.alive ? 'alive' : 'fas fa-skull-crossbones';
        h3.innerHTML = member.name;
        li.appendChild(a);
        a.appendChild(h3);
        imageWrapper.appendChild(img);
        a.appendChild(imageWrapper);
        a.appendChild(dead);
        a.appendChild(gender);
        a.id = member.id;
        a.className = 'card';
        toAdd.appendChild(li);
        document.getElementById('members').appendChild(toAdd);
        // console.log(member);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
}
