import React, { Component } from "react"

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
    console.log("mysecond" + mySecond)
    this.setState({ totalSecond: mySecond })
    this.countdown()
    console.log("finished countdown")
  }

  countdown() {
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

    console.log("countdownfinished")
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
          <button>start</button>
          {/*stop*/}
          {/*show count*/}
        </form>
        <h1>
          {Math.floor(this.state.totalSecond / 60)}:
          {this.state.totalSecond % 60}
        </h1>
      </div>
    )
  }
}
export default App
