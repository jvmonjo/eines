import axios from 'axios'

export default function getDetails(slug) {
  axios.get(`https://api.got.show/api/book/characters/bySlug/${slug}`)
    .then(function (response) {
      // console.log(response.data)
      const details = response.data
      document.title = `${details.name} details | Treball assignatura Eines HTML i CSS`
      const title = document.getElementById('title')
      title.innerHTML = details.name
      const n = details.house.split(' ')
      const houseId = n[n.length - 1]

      // marquem la casa corresponent com a activa al menú
      const menu = document.getElementById(`menu-${houseId}`)
      menu.className = 'active'

      // canviem la imatge placeholder per la correcta
      const escut = document.getElementById('escut')
      escut.src = `/assets/img/${houseId}.svg`

      // Emplenem els detalls
      if (details.image) {
        const photo = document.getElementById('photo')
        photo.src = details.image
      }
      const gender = document.getElementById('gender')
      gender.innerHTML = details.gender ? details.gender : ''
      const culture = document.getElementById('culture')
      culture.innerHTML = details.culture ? details.culture : ''
      const titles = document.getElementById('titles')
      titles.innerHTML = details.titles ? details.titles : ''
      const birth = document.getElementById('birth')
      birth.innerHTML = details.birth ? details.birth : ''
      const placeOfBirth = document.getElementById('placeOfBirth')
      placeOfBirth.innerHTML = details.placeOfBirth ? `in ${details.placeOfBirth}` : ''
      const placeOfDeath = document.getElementById('placeOfDeath')
      placeOfDeath.innerHTML = details.placeOfDeath ? `in ${details.placeOfDeath}` : ''
      const death = document.getElementById('death')
      death.innerHTML = details.death ? details.death : ''
      // console.log(details);

      // Emplenem els relacionats
      return axios.get(`https://api.got.show/api/book/characters/byHouse/${details.house}`)
        .then(function (response) {
          const members = response.data
          // aleatoritza els membres per a que no isquen sempre els mateixos suggeriments
          shuffle(members)
          // n'agafem 4
          const relatedMembers = members.slice(0, 4)
          const relatedContainer = document.getElementById('members')
          const toAdd = document.createDocumentFragment();
          for (const member of relatedMembers) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `/details/?slug=${member.slug}`;
            const h3 = document.createElement('h3');
            const gender = document.createElement('span');
            gender.className = member.gender === 'male' ? 'fas fa-mars' : 'fas fa-venus';
            const dead = document.createElement('span');
            dead.className = member.alive ? 'alive' : 'fas fa-skull-crossbones';
            h3.innerHTML = member.name;
            li.appendChild(a);
            a.appendChild(h3);
            a.appendChild(dead);
            a.appendChild(gender);
            a.id = member.id;
            a.className = 'card';
            toAdd.appendChild(li);
            relatedContainer.appendChild(toAdd);
            // console.log(member);
          }
        })
    })
    .catch(function (error) {
      console.log(error);
    })
}

function shuffle(array) {
  var currentIndex = array.length,
    temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}