import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mangoesCount: 0, bananasCount: 0}

  onEatMangoCount = () => {
    this.setState(prevMangosCount => ({
      mangoesCount: prevMangosCount.mangoesCount + 1,
    }))
  }

  onEatBananaCount = () => {
    this.setState(prevBananasCount => ({
      bananasCount: prevBananasCount.bananasCount + 1,
    }))
  }

  render() {
    const {mangoesCount, bananasCount} = this.state
    return (
      <div className="container">
        <h1 className="heading">
          Bob ate <span className="count">{mangoesCount}</span> mangoes{' '}
          <span className="count">{bananasCount}</span> bananas
        </h1>
        <div className="fruits-container">
          <div className="fruit-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              className="fruit-image"
              alt="mango"
            />
            <button
              type="button"
              className="button"
              onClick={this.onEatMangoCount}
            >
              Eat Mango
            </button>
          </div>
          <div className="fruit-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="fruit-image"
              alt="banana"
            />
            <button
              type="button"
              className="button"
              onClick={this.onEatBananaCount}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
