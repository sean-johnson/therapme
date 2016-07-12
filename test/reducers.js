import test from 'ava'

import { showDetails, SHOW_DETAILS, hideDetails, HIDE_DETAILS, addThing, ADD_THING } from '../client/actions'
import reducer from '../client/reducer'

test('Initial state meets expectations', t => {
  const action = { type: '@@INIT' }
  const state = reducer(undefined, action)
  t.is(state.selectedThing, null)
  t.is(state.things.length, 1)
})

test('SHOW_DETAILS sets selectedThing', t => {
  const id = 44
  const action = { type: 'SHOW_DETAILS', id: id }
  const state = reducer(undefined, action)
  t.is(state.selectedThing, id)
})

test('HIDE_DETAILS nullifies selectedThing', t => {
  const currentState = { selectedThing: 44 }
  const action = { type: 'HIDE_DETAILS' }
  const state = reducer(currentState, action)
  t.is(state.selectedThing, null)
})

test('ADD_THING adds a new thing', t => {
  const thingName = 'Test thing'
  const action = { type: 'ADD_THING', name: thingName }
  const state = reducer(undefined, action)
  t.is(state.things[1].name, thingName)
  t.is(state.things.length, 2)
})
