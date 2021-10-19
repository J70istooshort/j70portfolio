import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Link } from 'gatsby'

import Layout from '../components/layout'

ReactModal.setAppElement('#___gatsby')

class IndexPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }
  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <Layout>
        <div id="main">
          <h1>Lorum Ipson</h1>

          <Link to="#" onClick={this.handleModalOpen}>
            Click to test
          </Link>
        </div>
        <ReactModal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Example Modal In Gatsby"
        >
          <h2>BEBO</h2>
          <button onClick={this.handleModalClose}>Close Modal</button>
        </ReactModal>
      </Layout>
    )
  }
}

export default IndexPage