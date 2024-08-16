// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {sub: true}

  subscribe = () => {
    this.setState(st => {
      if (st.sub === true) {
        return {sub: false}
      }
      return {sub: true}
    })
  }

  render() {
    const {sub} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="para">Thank you! Happy learning</p>
        {sub && (
          <buttton onClick={this.subscribe} className="btn">
            Subscribe
          </buttton>
        )}
        {!sub && (
          <buttton onClick={this.subscribe} className="btn">
            Subscribed
          </buttton>
        )}
      </div>
    )
  }
}

export default Welcome
