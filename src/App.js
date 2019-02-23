import React, { Component } from "react"
import TimerInput from "./TimerInput"

class App extends Component {
  constructor() {
    super()
    this.state = {
      timeLeft: {}
    }
  }
  render() {
    return (
      <div>
        <TimerInput />
        <div>App is here</div>
      </div>
    )
  }
}
export default App
