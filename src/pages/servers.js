import React, { Component } from "react"
import ReactModal from "react-modal"

import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as servers from "../components/cssmodules/servers.module.css"
import * as pages from "../components/cssmodules/pages.module.css"

ReactModal.setAppElement("#___gatsby")

class ServersPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentModal: 0,
    }
  }

  handleModalClose = event => {
    this.setState({ currentModal: 0 })
  }

  handleJ70ModalOpen = event => {
    this.setState({ currentModal: 1 })
  }

  handleDestinModalOpen = event => {
    this.setState({ currentModal: 2 })
  }

  handleMoonModalOpen = event => {
    this.setState({ currentModal: 3 })
  }

  handleLacunaModalOpen = event => {
    this.setState({ currentModal: 4 })
  }

  handleJamknightModalOpen = event => {
    this.setState({ currentModal: 5 })
  }

  handleNextModal = event => {
    if (this.state.currentModal === 5) {
      this.setState({ currentModal: 1 })
    } else {
      this.setState({ currentModal: this.state.currentModal + 1 })
    }
  }

  handlePreviousModal = event => {
    if (this.state.currentModal === 1) {
      this.setState({ currentModal: 5 })
    } else {
      this.setState({ currentModal: this.state.currentModal - 1 })
    }
  }

  render() {
    return (
      <Layout>
        <Seo title="Servers" />

        {/* Modals */}
        <div className={servers.servermodalcontainer}>
          {/* J70 modal*/}
          <ReactModal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
            className={servers.servermodal}
            isOpen={this.state.currentModal === 1}
            onRequestClose={this.handleModalClose}
            contentLabel="Server popup"
          >
            <button
              onClick={this.handlePreviousModal}
              className={servers.modalleft}
            >
              ↞
            </button>

            <button
              onClick={this.handleNextModal}
              className={servers.modalright}
            >
              ↠
            </button>

            <div className={servers.modalheading}>ShortSMP</div>
            <div className={servers.modaltext}>Lorem ipsum dolor sit amet</div>

          </ReactModal>
          {/* Destin modal*/}
          <ReactModal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
            className={servers.servermodal}
            isOpen={this.state.currentModal === 2}
            onRequestClose={this.handleModalClose}
            contentLabel="Server popup"
          >
            <button
              onClick={this.handlePreviousModal}
              className={servers.modalleft}
            >
              ↞
            </button>

            <button
              onClick={this.handleNextModal}
              className={servers.modalright}
            >
              ↠
            </button>

            <div className={servers.modalheading}>Banana SMP</div>
            <div className={servers.modaltext}>Lorem ipsum dolor sit amet</div>
          </ReactModal>
          {/* Moonsponge modal */}
          <ReactModal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
            className={servers.servermodal}
            isOpen={this.state.currentModal === 3}
            onRequestClose={this.handleModalClose}
            contentLabel="Server popup"
          >
            <button
              onClick={this.handlePreviousModal}
              className={servers.modalleft}
            >
              ↞
            </button>

            <button
              onClick={this.handleNextModal}
              className={servers.modalright}
            >
              ↠
            </button>

            <div className={servers.modalheading}>Moonsponge SMP</div>
            <div className={servers.modaltext}>Lorem ipsum dolor sit amet</div>
          </ReactModal>
          {/*Lacuna modal*/}
          <ReactModal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
            className={servers.servermodal}
            isOpen={this.state.currentModal === 4}
            onRequestClose={this.handleModalClose}
            contentLabel="Server popup"
          >
            <button
              onClick={this.handlePreviousModal}
              className={servers.modalleft}
            >
              ↞
            </button>

            <button
              onClick={this.handleNextModal}
              className={servers.modalright}
            >
              ↠
            </button>

            <div className={servers.modalheading}>Lacuna SMP</div>
            <div className={servers.modaltext}>Lorem ipsum dolor sit amet</div>
          </ReactModal>
          {/*Jamknight modal*/}
          <ReactModal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.75)",
              },
            }}
            className={servers.servermodal}
            isOpen={this.state.currentModal === 5}
            onRequestClose={this.handleModalClose}
            contentLabel="Server popup"
          >
            <button
              onClick={this.handlePreviousModal}
              className={servers.modalleft}
            >
              ↞
            </button>

            <button
              onClick={this.handleNextModal}
              className={servers.modalright}
            >
              ↠
            </button>

            <div className={servers.modalheading}>Jamknight SMP</div>
            <div className={servers.modaltext}>Lorem ipsum dolor sit amet</div>
          </ReactModal>
        </div>

        <div className={pages.pageheading}>Servers I worked on</div>
        <div className={servers.serverwrapper}>
          <button
            className={servers.j70server}
            onClick={this.handleJ70ModalOpen}
          >
            <div className={servers.serverinner} />
          </button>
          <button
            className={servers.j70server}
            onClick={this.handleDestinModalOpen}
          >
            <div className={servers.serverinner} />
          </button>
          <button
            className={servers.j70server}
            onClick={this.handleMoonModalOpen}
          >
            <div className={servers.serverinner} />
          </button>
          <button
            className={servers.j70server}
            onClick={this.handleLacunaModalOpen}
          >
            <div className={servers.serverinner} />
          </button>
          <button
            className={servers.j70server}
            onClick={this.handleJamknightModalOpen}
          >
            <div className={servers.serverinner} />
          </button>
        </div>
      </Layout>
    )
  }
}

export default ServersPage
