// This Is An Example Implementation of the UI Kit
import React from 'react'

import Layout from './layout/Layout'
import TopBar from './layout/TopBar'
import Select from './forms/Select'

import FilePicker from './forms/FilePicker'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      options: [
        'Value 1',
        'Value 2',
        'Value 3',
      ],
      selectedOption: undefined,
    }

    this.setSelectedOption = this.setSelectedOption.bind(this)
  }

  setSelectedOption(e) {
    this.setState({
      selectedOption: e.target.value,
    })
  }

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
              <Select
                id="mag-test-select"
                name="mag-select"
                value={ this.state.selectedOption }
                options={ this.state.options }
                onChange={ e => this.setSelectedOption(e) }
              />
            </form>
          </div>
        </div>

      </Layout>
    )
  }
}

export default App
