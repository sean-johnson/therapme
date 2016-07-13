import { connect } from 'react-redux'

import SessionEnd from '../components/SessionEnd'
import Summary from '../components/Summary'
import { addEmoticon } from '../actions'

const mapStateToProps = (state) => {
  return {
    name: ''  // Start here
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideDetails: () => {
      dispatch(addEmoticon())
    }
  }
}

const SessionStartContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Summary) // Export contents to Summary?

export default SessionStartContainer
