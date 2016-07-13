import { connect } from 'react-redux'

import SessionStart from '../components/SessionStart'
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
)(Summary)

export default SessionStartContainer
