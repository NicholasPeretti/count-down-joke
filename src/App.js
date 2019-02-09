import React, { Component } from 'react';
import './App.css';
import moment from 'moment'

class App extends Component {
  constructor() {
    super()

    this.state = {
      targetdate: moment('2019-02-09 17:00'),
      currentDate: new Date(),
      intervalRef: null
    }
  }

  componentDidMount () {
    if (this.state.intervalRef) return

    let intervalRef = setInterval(() => {
      this.setState({
        currentDate: new Date()
      })
    }, 1000)
    this.setState({
      intervalRef
    })
  }

  render() {
    const { currentDate, targetdate } = this.state
    const diff = targetdate.diff(currentDate, 'seconds')
    const missingTime = moment.duration(diff, 'seconds')

    return (
      <div className="App">
        <header className="App-header">
          <h1 style={{ fontSize: '100px' }}>
            {(diff < 0) ?
              `Time's up!`
            :
              `${missingTime.hours()}H ${missingTime.minutes()}m ${missingTime.seconds()}s`
            }
          </h1>
        </header>
      </div>
    );
  }
}

export default App;
