// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {num: 0}

  onButton = () => {
    this.setState(but => {
      const randomNumber = Math.random() * 100
      return {num: (but.num = Math.ceil(randomNumber))}
    })
  }

  render() {
    const {num} = this.state
    let text = null
    if (num % 2 === 0) {
      text = 'Even'
    } else {
      text = 'Odd'
    }
    return (
      <div className="app-container">
        <div className="container">
          <h1 className="heading">Count <span className='number'>{num}</span></h1>
          <p className="odd-even-text">Count is <span className='text'>{text}</span></p>
          <button type="button" className="button" onClick={this.onButton}>
            Increment
          </button>
          <p className="description">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
