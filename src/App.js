import React, { Component } from "react"
import Hourglass from "./image/hourglass.png"
import Sand from "./image/sand.png"
import "./App.css"
class App extends Component {
  constructor() {
    super()
    this.state = {
      minuteLeft: 0,
      secondLeft: 0,
      totalSecond: 0,
      sandPosition: 0,
      sandStep: 0,
      isCounting: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.countdown = this.countdown.bind(this)
    this.sandFlow = this.sandFlow.bind(this)
  }
  handleChange(event) {
    const { name, value } = event.target
    this.setState({ [name]: value })
  }

  handleSubmit(event) {
    event.preventDefault()
    const mySecond = this.state.minuteLeft * 60 + this.state.secondLeft
    const mySandStep = 300 / mySecond
    this.setState({ totalSecond: mySecond, sandStep: mySandStep })
    this.countdown()
  }
  sandFlow(move) {
    return (
      <img
        style={{
          //moving this...maybe make a method that renders the image given speicifc position
          position: "absolute",
          top: move /**take a variable in */,

          height: "300px"
        }}
        src={Sand}
        alt="Sand"
      />
    )
  }
  countdown() {
    //when clicked several times, expediates the process
    const myDown = setInterval(() => {
      if (this.state.totalSecond < 2) {
        clearInterval(myDown)
        //clean up the sand to be back up
        alert("Times up! please refresh for another use :]")
      }

      this.setState(prevState => {
        return {
          totalSecond: prevState.totalSecond - 1,
          sandPosition: Math.floor(prevState.sandPosition + prevState.sandStep)
        }
      })
    }, 1000)
  }
  //how to create sand falling off
  //have png of hourglass with hole, have image of sand going down behind.
  render() {
    return (
      <div className="Timer-Display">
        <div>
          {this.sandFlow(this.state.sandPosition)}
          <img
            style={{
              position: "relative",
              height: "600px"
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
      </div>
    )
  }
}
export default App
