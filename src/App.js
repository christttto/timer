import React, { Component } from "react"
import Hourglass from "./image/hourglass.png"
import Sand from "./image/sand.png"

class App extends Component {
  constructor() {
    super()
    this.state = {
      minuteLeft: 0,
      secondLeft: 0,
      totalSecond: 0,
      isCounting: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.countdown = this.countdown.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
    console.log(this.state.minuteLeft)
  }

  handleSubmit(event) {
    event.preventDefault()
    const mySecond = this.state.minuteLeft * 60 + this.state.secondLeft
    this.setState({ totalSecond: mySecond })
    this.countdown()
  }

  countdown() {
    //when clicked several times, expediates the process
    const myDown = setInterval(() => {
      if (this.state.totalSecond < 2) {
        clearInterval(myDown)
      }
      this.setState(prevState => {
        return {
          totalSecond: prevState.totalSecond - 1
        }
      })
    }, 1000)
  }
  //how to create sand falling off
  //have png of hourglass with hole, have image of sand going down behind.
  render() {
    return (
      <div>
        <div>
          <img
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              height: "600px"
            }}
            src={Sand}
            alt="Sand"
          />
          <img
            style={{
              position: "relative",
              height: "1200px"
            }}
            src={Hourglass}
            alt="Hourglass"
          />
        </div>

        <h1>
          {Math.floor(this.state.totalSecond / 60)}:
          {this.state.totalSecond % 60}
        </h1>
        <form name="timer" onSubmit={this.handleSubmit}>
          <input
            type="number"
            name="minuteLeft"
            value={this.state.minuteLeft}
            placeholder="M"
            onChange={this.handleChange}
          />
          <button>start</button>
        </form>
        {Hourglass.clientWidth}
      </div>
    )
  }
}
export default App
