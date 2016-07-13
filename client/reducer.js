import { ADD_EMOTICON } from './actions'

const INITIAL_STATE = {
  selectedEmoticon: null,
  moods: [{
    id: 1,
    name: 'Happy'
  },{
    id: 1,
    name: 'Sad'
  },{
    id: 1,
    name: 'Bored'
  },{
    id: 1,
    name: 'Angry'
  }]
}

export default (state = INITIAL_STATE , action) => {
  switch (action.type) {
    case ADD_EMOTICON:
      return Object.assign({}, state, {
        selectedThing: action.id
      })
    default:
      return state
  }
}
