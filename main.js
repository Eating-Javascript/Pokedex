const pokeData = {
  url: 'https://pokeapi.co/api/v2/',
  type: 'pokemon',
  id: '251'
}

const {
  url,
  type,
  id
} = pokeData

const pokeUrl = `${url}${type}/${id}`

fetch(pokeUrl)
  .then((data) => data.json())
  .then((pokemon) => generateHTML(pokemon))

const generateHTML = (data) => {
  console.log(data)
  const html = `
  <div class="name text-3xl text-green-400 font-bold text-center"> ${data.name}</div>
    <img class="w-full" src="${data.sprites.front_default}">
    <div class="details text-center px-6 py-4">
      <span class="type inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2">${data.type}</span>
      <span class="type inline-block bg-gray-200 rounded-sm px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#${data.type}</span>
    </div>
  </div>
  `
  const pokemonDiv = document.querySelector('.pokemon')
  pokemonDiv.innerHTML = html
}
