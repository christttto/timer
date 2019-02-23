import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      timeLeft: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    console.log("handleChange called")
    const { name, type, value } = event.target
    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  render() {
    return (
      <div>
        <div>App is here</div>
        <input
          type="number"
          name="timeLeft"
          value={this.state.timeLeft}
          placeholder="00"
          onChange={this.handleChange}
        />
        <h1>{this.state.timeLeft}</h1>
      </div>
    )
  }
}
export default App
