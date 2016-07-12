import test from 'ava'
import React from 'react'
import { shallow } from 'enzyme'

import App from '../client/components/App'
import ThingListContainer from '../client/containers/ThingListContainer'
import ThingDetailContainer from '../client/containers/ThingDetailContainer'

test('<App /> has a Things header', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find('h1').text(), 'Things')
})

test('<App /> contains a ThingListContainer', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find(ThingListContainer).length, 1)
})

test('<App /> contains a ThingDetailContainer', t => {
  const wrapper = shallow(<App />)
  t.is(wrapper.find(ThingDetailContainer).length, 1)
})
