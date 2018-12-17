import React from 'react'

// This Is An Example Implementation of the UI Kit
import Layout from './layout/Layout'
import TopBar from './layout/TopBar'
import SideBar from './layout/SideBar'
import Main from './layout/Main'
import Page from './layout/Page'
import { FlexParent, FlexItem } from './layout/Flex'

import FilePicker from './forms/FilePicker'
import Button from './general/Button'


class App extends React.Component {

  render() {
    return (
      <Layout fullscreen={true} sidebar={true} sidebarOpen={false}>
        
        <TopBar fixed={true}>
          <FlexItem className="mag-topbar--brand">
            <h3>Magnetic Components</h3>
          </FlexItem>
          <FlexItem className="mag-topbar--nav">
            <ul>
              <li>
                <a href="#0">Account</a>
              </li>
              <li>
                <a href="#0">Dashboard</a>
              </li>
            </ul>
          </FlexItem>
        </TopBar>

        <SideBar>
          
        </SideBar>
        
        <Main>

          <Page>

            <FilePicker id="filepicker" label="Choose An Image" dropzone={true} onFiles={} />

            <div style={{height: '3em'}}></div>

            <Button>A Default Button</Button>

          </Page>

        </Main>

      </Layout>
    )
  }
}

export default App
