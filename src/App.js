import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      minuteLeft: 0,
      secondLeft: 0
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.countdown = this.countdown.bind(this)
  }
  handleChange(event) {
    console.log("handleChange called")
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("handleSubmit called, start the counter")
  }
  countdown() {
    let minute = this.state.minuteLeft
    let second = 0
    return (
      <div>
        {minute}:{second}
      </div>
    )
  }
  //needs the counter
  render() {
    return (
      <div>
        <div>App is here</div>
        {/*minuteLeft*/}
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="minuteLeft"
            value={this.state.minuteLeft}
            placeholder="00"
            onChange={this.handleChange}
          />
          <button>Start</button>
        </form>
        {this.countdown()}
        <h1>minuteLeft:{this.state.minuteLeft}</h1>
      </div>
    )
  }
}
export default App
