
// This Is An Example Implementation of the UI Kit


import React from 'react'

import Layout from './layout/Layout'
import TopBar from './layout/TopBar'




class App extends React.Component {

  render() {
    return (
      <Layout className="my-extra-class">
        
        <TopBar fixed={true}>
          <h3>I'm in the top bar</h3>
        </TopBar>
        
        <h1>App</h1>

      </Layout>
    )
  }
}

export default App
