import axios from 'axios'

export default function getMembers(house) {
  axios.get(`https://api.got.show/api/book/characters/byHouse/${house}`)
    .then(function (response) {
      // console.log(response.data)
      const members = response.data
      document.title = `${house} | Treball assignatura Eines HTML i CSS`
      const title = document.getElementById('title')
      title.innerHTML = house
      const escut = document.getElementById('escut')
      const n = house.split(' ')
      const houseId = n[n.length - 1]
      const menu = document.getElementById(`menu-${houseId}`)
      menu.className = 'active'
      escut.src = `/assets/img/${houseId}.svg`
      const toAdd = document.createDocumentFragment();
      for (const member of members) {
        const a = document.createElement('a');
        a.href = `/details/?slug=${member.slug}`;
        const li = document.createElement('li');
        const h3 = document.createElement('h3');
        const gender = document.createElement('span');
        gender.className = member.gender === 'male' ? 'fas fa-mars' : 'fas fa-venus';
        const dead = document.createElement('span');
        dead.className = member.alive ? 'alive' : 'fas fa-skull-crossbones';
        h3.innerHTML = member.name;
        a.appendChild(li);
        li.appendChild(h3);
        li.appendChild(dead);
        li.appendChild(gender);
        li.id = member.id;
        li.className = 'card';
        toAdd.appendChild(a);
        document.getElementById('members').appendChild(toAdd);
        // console.log(member);
      }
      // const div = document.createElement("div")
      // const name = document.getElementById('name')
      // name.innerHTML = response.data.quote
      // const gender = document.getElementById('gender')
      // gender.innerHTML = response.data.character
    })
    .catch(function (error) {
      console.log(error);
    })
}