import axios from 'axios'

export default function getDetails(slug) {
  axios.get(`https://api.got.show/api/book/characters/bySlug/${slug}`)
    .then(function (response) {
      // console.log(response.data)
      const details = response.data
      const title = document.getElementById('title')
      title.innerHTML = details.name
      const menu = document.getElementById(`menu ${details.house}`)
      menu.className = 'active'
      const escut = document.getElementById('escut')
      escut.src = `/assets/img/${details.house}.svg`
      if (details.image) {
        const photo = document.getElementById('photo')
        photo.src = details.image
      }
      const gender = document.getElementById('gender')
      gender.innerHTML = details.gender
      const culture = document.getElementById('culture')
      culture.innerHTML = details.culture
      const titles = document.getElementById('titles')
      titles.innerHTML = details.titles
      const birth = document.getElementById('birth')
      birth.innerHTML = details.birth ? details.birth : ''
      const placeOfBirth = document.getElementById('placeOfBirth')
      placeOfBirth.innerHTML = details.placeOfBirth ? `in ${details.placeOfBirth}` : ''
      const placeOfDeath = document.getElementById('placeOfDeath')
      placeOfDeath.innerHTML = details.placeOfDeath ? `in ${details.placeOfDeath}` : ''
      const death = document.getElementById('death')
      death.innerHTML = details.death ? details.death : ''
      console.log(details);
      // for (const member of members) {
      //   const a = document.createElement('a');
      //   a.href = `/house/${house}/${member.id}`;
      //   const li = document.createElement('li');
      //   const h3 = document.createElement('h3');
      //   const gender = document.createElement('span');
      //   gender.className = member.gender === 'male' ? 'fas fa-mars' : 'fas fa-venus';
      //   const dead = document.createElement('span');
      //   dead.className = member.alive ? 'alive' : 'fas fa-skull-crossbones';
      //   h3.innerHTML = member.name;
      //   a.appendChild(li);
      //   li.appendChild(h3);
      //   li.appendChild(dead);
      //   li.appendChild(gender);
      //   li.id = member.id;
      //   li.className = 'card';
      //   toAdd.appendChild(a);
      //   document.getElementById('members').appendChild(toAdd);
      //   console.log(member);
      // }
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