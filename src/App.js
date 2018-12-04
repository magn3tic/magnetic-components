
// This Is An Example Implementation of the UI Kit


import React from 'react'

import Layout from './layout/Layout'
import TopBar from './layout/TopBar'
import TextInput from './forms/TextInput'




class App extends React.Component {

  render() {
    return (
      <Layout className="my-extra-class">
        
        <TopBar fixed={true}>
          <h3>I'm in the top bar</h3>
        </TopBar>
        
        <h1>App</h1>

        <div className="test-spacer" style={{'marginTop': '10rem'}}>
          <TextInput
            className="mag-testclass mag-another-testclass"
            id="mag-test-id"
            onChange={ e => console.log(e.target.value) }
            onBlur={ e => console.log('blur', e) }
            errors={[ 'invalid input', 'not cool enough' ]}
          />
        </div>

      </Layout>
    )
  }
}

export default App
