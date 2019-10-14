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
      const menu = document.getElementById(`menu-${houseId}`)
      menu.className = 'active'
      const escut = document.getElementById('escut')
      escut.src = `/assets/img/${houseId}.svg`
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
      // Populate related
      return axios.get(`https://api.got.show/api/book/characters/byHouse/${details.house}`)
        .then(function (response) {
          const members = response.data
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
            li.className = 'card';
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

export function getRelated() {

}