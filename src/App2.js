// This Is An Example Implementation of the UI Kit
import React from 'react'

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
          
        </TopBar>

        <SideBar>
          
        </SideBar>
        
        <Main>

          <Page>

            <FilePicker id="filepicker" label="Choose An Image" dropzone={true} />

            <div style={{height: '3em'}}></div>

            <Button>A Default Button</Button>

          </Page>

        </Main>

      </Layout>
    )
  }
}

export default App
