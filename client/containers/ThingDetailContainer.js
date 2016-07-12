import { connect } from 'react-redux'

import ThingDetail from '../components/ThingDetail'
import { hideDetails } from '../actions'

const mapStateToProps = (state) => {
  const thingDetails = state.things.filter((thing) => {
    if (thing.id === state.selectedThing) {
      return thing
    }
  })[0] // there should be only one

  return {
    thing: thingDetails
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetails: () => {
      dispatch(hideDetails())
    }
  }
}

const ThingDetailContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThingDetail)

export default ThingDetailContainer
