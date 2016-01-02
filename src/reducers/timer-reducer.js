import timerConstants from '../actions/timer-constants';

export default function(state={count: 0}, action) {
  function modifier(props) {
    return Object.assign({}, state, props);
  }
  switch(action.type){
    case timerConstants.INCREASE:
      return modifier({count: state.count+1});
    case timerConstants.RESET:
      return modifier({count: 0});
    default:
      return state;
  }
}
