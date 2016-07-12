import { connect } from 'react-redux'

import ThingList from '../components/ThingList'
import { showDetails, addThing } from '../actions'

const mapStateToProps = (state) => {
  return {
    things: state.things
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    showDetails: (id) => {
      dispatch(showDetails(id))
    },
    addThing: () => {
      dispatch(addThing())
    }
  }
}

const ThingListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ThingList)

export default ThingListContainer
