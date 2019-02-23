import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      minuteLeft: 0,
      secondLeft: 0,
      counting: false
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
    const { name } = event.target
    name === "timerFunction" ? this.countdown() : console.log("neh")
  }
  coun
  countdown() {
    //decrease the clock by a second until
    console.log("start or pause")
    if (this.counting) {
      this.setState({ counting: false })
    } else {
      console.log("false")
    }
  }
  //needs the counter
  render() {
    return (
      <div>
        <div>App is here</div>
        {/*minuteLeft*/}
        <form name="timerFunction" onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="minuteLeft"
            value={this.state.minuteLeft}
            placeholder="M"
            onChange={this.handleChange}
          />
          <button name="start">Start</button>
        </form>
        {this.countdown()}
        <h1>minuteLeft:{this.state.minuteLeft}</h1>
      </div>
    )
  }
}
export default App
