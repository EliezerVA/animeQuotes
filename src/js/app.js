import API from './api.js'
import Character from './character.js'
const api = new API()
let current = '20'
const $load = document.querySelector('#load')

$load.addEventListener('click', async () => {
    const character = await api.getCharacter(current)
    new Character(character)
})

async function initApp(initCharacterId){
    const character = await api.getCharacter(initCharacterId)
    console.log(character)
    new Character(character)
}

initApp(current)