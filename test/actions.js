import test from 'ava'

import { showDetails, SHOW_DETAILS, hideDetails, HIDE_DETAILS, addThing, ADD_THING } from '../client/actions'

test('showDetails returns and action that includes the id', t => {
  const id = 44
  const action = showDetails(id)
  t.is(action.id, id)
  t.is(action.type, SHOW_DETAILS)
})

test('hideDetails returns correct action type', t => {
  const action = hideDetails()
  t.is(action.type, HIDE_DETAILS)
})

test('addThing returns an action that includes a thing', t => {
  const action = addThing()
  t.is(action.type, ADD_THING)
  t.regex(action.name, /thing$/)
})
