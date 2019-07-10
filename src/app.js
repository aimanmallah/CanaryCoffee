import React from 'react'
import ReactDOM from 'react-dom'

import 'bulma'

import Home from './components/Home'
// import Intro from './components/Introduction'
import Menu from './components/Menu'
import Map from './components/Map'
import Footer from './components/Footer'


class App extends React.Component {

  render() {
    return (
      <main>
        < Home />
        < Menu />
        < Map />
        < Footer />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
