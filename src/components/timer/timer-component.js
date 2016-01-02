import React from 'react';

export default class TimerComponent extends React.Component {
  componentDidMount() {
    setInterval(this.props.onIncrease, 1000);
  }
  render(){
    return (
      <button onClick={this.props.onReset}>Reset {this.props.value}</button>
    );
  }
}
