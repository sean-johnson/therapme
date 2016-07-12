import React from 'react'

import ThingListContainer from '../containers/ThingListContainer'
import ThingDetailContainer from '../containers/ThingDetailContainer'
import Interface from './Interface'

export default () => {
  return (
    <div>
      <Interface />
      <ThingListContainer />
      <ThingDetailContainer />
    </div>
  )
}
