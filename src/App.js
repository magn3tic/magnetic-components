// This Is An Example Implementation of the UI Kit
import React from 'react'

import Layout from './layout/Layout'
import TopBar from './layout/TopBar'
import RadioGroup from './forms/RadioGroup'

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
            <FilePicker id="filepicker" label="Upload An Image" dropzone={true} />
          </div>
        </main>

        <div className="test-spacer" style={{'marginTop': '10rem'}}>
          <div className="mag-inner">
            <form>
              <RadioGroup 
                name="mag-test-radiogroup"
                options={[
                  {
                    labelText: 'Option 1',
                    id: 'mag-option-1',
                    value: 'test value 1',
                  },
                  {
                    labelText: 'Option 2',
                    id: 'mag-option-2',
                    value: 'test value 2',
                  },
                  {
                    labelText: 'Option 3',
                    id: 'mag-option-3',
                    value: 'test value 3',
                  },
                ]}
                // errors={['*Must select one option']}
              />
            </form>
          </div>
        </div>

      </Layout>
    )
  }
}

export default App
