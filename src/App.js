// This Is An Example Implementation of the UI Kit
import React from 'react'

import Layout from './layout/Layout'
import TopBar from './layout/TopBar'
import ColorInput from './forms/ColorInput'

import FilePicker from './forms/FilePicker'



class App extends React.Component {

  render() {
    return (
      <Layout className="my-extra-class">
        
        <TopBar fixed={true}>
          <div className="mag-inner">
            <h3>I'm in the top bar</h3>
          </div>
        </TopBar>
        
        <main className="mag-main">
          <div className="mag-inner">

            <FilePicker id="filepicker" label="Choose An Image" dropzone={true} />

          </div>
        </main>

        <div className="test-spacer" style={{'marginTop': '10rem'}}>
          <div className="mag-inner">
            <form>
              <ColorInput
                id="mag-test-colorinput"
                name="mag-colorinput"
                onChange={ ({ target }) => console.log(target.value) }
              />
            </form>
          </div>
        </div>

      </Layout>
    )
  }
}

export default App
