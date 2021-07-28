import axios from 'axios'

const baseUrl="https://www.dnd5eapi.co/api"

const getAbilityScores = () => {
    const request = axios.get(`${baseUrl}/ability-scores`)
    return request.then(response => response.data)
}
const getProficiencies = () => {
    const request = axios.get(`${baseUrl}/proficiencies`)
    return request.then(response => response.data)
}
const getSkills = () => {
    const request = axios.get(`${baseUrl}/skills`)
    return request.then(response => response.data)
}
const getBackgrounds = () => {
    const request = axios.get(`${baseUrl}/backgrounds`)
    return request.then(response => response.data)
}

const getSpells = () => {
    const request = axios.get(`${baseUrl}/spells`)
    return request.then(response => response.data)
}

// export const getBackgrounds = () => {
//     const request = axios.get(`${baseUrl}/backgrounds`)
//     return request.then(response => response.data)
// }
    
export default {
    getAbilityScores: getAbilityScores,
    getProficiencies: getProficiencies,
    getSkills: getSkills,
    getBackgrounds: getBackgrounds,
    getSpells: getSpells
}