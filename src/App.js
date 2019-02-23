import React, { Component } from "react"

class App extends Component {
  constructor() {
    super()
    this.state = {
      minuteLeft: 0,
      secondLeft: 0,
      totalSeconds: 0
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state.minuteLeft)
  }

  handleSubmit(event) {
    event.preventDefault()
    console.log("handleSubmit called")
    const mySecond = this.state.minuteLeft * 60 + this.secondLeft
    //need to adjust the totalsecond state through handle change?
    this.setState({ totalSeconds: mySecond })
    //error for pause and
  }
  render() {
    return (
      <div>
        <div>hourglass image here</div>
        <form name="timer" onSubmit={this.handleSubmit}>
          {/*minute input */}
          <input
            type="number"
            name="minuteLeft"
            value={this.state.minuteLeft}
            placeholder="M"
            onChange={this.handleChange}
          />
          {/*start*/}
          {/*stop*/}
          {/*show count*/}
        </form>
        {this.state.minuteLeft}
      </div>
    )
  }
}
export default App
