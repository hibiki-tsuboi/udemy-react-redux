import React, {Component} from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component {
  constructor(props) {
    super(props)
    console.log(this.state)
    this.state = {count: 0}
  }

  handlePlusbutton = () => {
    console.log("handlePlusbutton")
    console.log(this.state.count)
    this.setState({count: this.state.count + 1})
  }

  handleMinusbutton = () => {
    this.setState({count: this.state.count - 1})
  }

  render() {
    return <>
      <div>count: {this.state.count}</div>
      <button onClick={this.handlePlusbutton}>+1</button>
      <button onClick={this.handleMinusbutton}>-1</button>
    </>
  }
}

export default App;
