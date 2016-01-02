import {connect} from 'react-redux';
import timerActions from '../../actions/timer-actions';
import TimerComponent from './timer-component';

// Map Redux state to component props
function mapStateToProps(state)  {
  return {
    value: state.timerReducer.count,
  };
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onIncrease: () => dispatch(timerActions.increase),
    onReset: () => dispatch(timerActions.reset),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TimerComponent);
