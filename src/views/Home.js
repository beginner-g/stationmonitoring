import React, {Component} from 'react';
import Header from './Header'
// import Main from './Main'
import '../styles/styles.css';
export default class Home extends Component {
  render() {
    return (
      <div className="homeBg">
        <div className="homeView">
          <Header />
        </div>
      </div>
    )
  }
}