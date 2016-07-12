export const SHOW_DETAILS = 'SHOW_DETAILS'
export const HIDE_DETAILS = 'HIDE_DETAILS'
export const ADD_THING = 'ADD_THING'

export function showDetails (id) {
  return {
    type: SHOW_DETAILS,
    id: id
  }
}

export function hideDetails () {
  return {
    type: HIDE_DETAILS
  }
}

export function addThing () {
  const colours = ['Labrador', 'Gingerline', 'Banan', 'Chartreuse', 'Taupe', 'Periwinkle']
  const randomIndex = Math.floor(Math.random() * colours.length)
  return {
    type: ADD_THING,
    name: `${colours[randomIndex]} thing`
  }
}
