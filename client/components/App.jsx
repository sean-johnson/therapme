import React from 'react'

import ThingListContainer from '../containers/ThingListContainer'
import ThingDetailContainer from '../containers/ThingDetailContainer'

export default () => {
  return (
    <div>
      <h1>Things</h1>
      <ThingListContainer />
      <ThingDetailContainer />
    </div>
  )
}
