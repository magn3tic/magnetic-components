// This Is An Example Implementation of the UI Kit
import React from 'react'

import Layout from './layout/Layout'
import TopBar from './layout/TopBar'
import SearchInput from './forms/SearchInput'

import FilePicker from './forms/FilePicker'



class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      searchableValues: [
        { name: 'Doug Alcantara', email: 'doug@mag.cr', jobTitle: 'Fullstack Web Developer' },
        { name: 'Colin McGraw', email: 'colin@mag.cr', jobTitle: 'Senior Web Developer' },
        { name: 'Nick Alcantara', email: 'nick@mag.cr', jobTitle: 'Frontend Web Developer' },
        { name: 'Matt Simpson', email: 'matt@mag.cr', jobTitle: 'Interactive Director' },
      ],
      searchConfig: {
        shouldSort: true,
        threshold: 0.6,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
      },
      foundValues: undefined,
    }

    this.setFoundValues = this.setFoundValues.bind(this)
  }

  setFoundValues(foundValues) {
    this.setState({ foundValues })
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
              <SearchInput
                id="mag-test-searchinput"
                name="mag-searchinput"
                label="Search Here:"
                searchConfig={ this.state.searchConfig }
                searchableValues={ this.state.searchableValues }
                searchParams={ [ 'name', 'email', 'jobTitle' ] }
                fuzzyResults={ this.state.foundValues }
                fuzzyResultsParam={ 'name' }
                onChange={ foundValues => this.setFoundValues(foundValues) }
              />
            </form>
          </div>
        </div>

      </Layout>
    )
  }
}

export default App
