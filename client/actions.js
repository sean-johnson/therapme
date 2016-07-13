export const ADD_EMOTICON = 'ADD_EMOTICON'


export function addEmoticon (id) {
  return {
    type: ADD_EMOTICON,
    id: id
  }
}
