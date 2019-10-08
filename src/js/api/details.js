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
      const n = details.house.split(' ')
      const houseId = n[n.length - 1]
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
    })
    .catch(function (error) {
      console.log(error);
    })
}