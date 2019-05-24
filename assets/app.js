// console.log('page is loaded. Yay!'

document.addEventListener('DOMContentLoaded', async () => {
  const getDataFromApi = async (url) => {
    let data = await (await fetch(url)).json()
    return data
  }

  const displayElement = document.getElementById('list')
  let character = await getDataFromApi('https://swapi.co/api/people/12/')
  let homeworld = await getDataFromApi(character.homeworld)
  displayElement.innerHTML = `<h1>${character.name}</h1><p>Home planet: ${homeworld.name}</p>`
})