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
    //need to adjust the totalSecond state through handle change?
    this.setState({ totalSecond: mySecond })
    this.countdown()
    //error for pause perhaps?
    //start or stop the timer
    //start or stop the image moving
    console.log("finished countdown")
  }
  countdown() {
    let id
    if (this.isCounting) {
      console.log("stop")
      this.setState(prevState => {
        return { isCounting: !prevState.isCounting }
      })
      clearInterval(id)
      //stop immediately
    } else {
      console.log("start")
      this.setState(prevState => {
        return { isCounting: !prevState.isCounting }
      })
      //start counting until no hour left
      id = setInterval(() => {
        this.totalSecond <= 0
          ? clearInterval(id)
          : this.setState(prevState => {
              return { totalSecond: prevState.totalSecond - 1 }
            })
      }, 1000)
    }
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
          <button>{this.state.isCounting ? "Stop" : "Start"}</button>
          {/*stop*/}
          {/*show count*/}
        </form>
        <h1>
          minuteLeft:{this.state.minuteLeft} secondLeft:{this.state.secondLeft}{" "}
          totalSecond:{this.state.totalSecond}
        </h1>
      </div>
    )
  }
}
export default App
