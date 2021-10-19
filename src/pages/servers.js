import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import * as servers from '../components/cssmodules/servers.module.css'
import * as pages from '../components/cssmodules/pages.module.css'

const ServersPage = () => (
  <Layout>
    <Seo title="Servers" />

    <div className={pages.pageheading}>Servers I worked on</div>

    <div className = {servers.serverwrapper}>
      <div className = {servers.j70server}><div className = {servers.serverinner} /></div>
      <div className = {servers.j70server}><div className = {servers.serverinner} /></div>
      <div className = {servers.j70server}><div className = {servers.serverinner} /></div>
      <div className = {servers.j70server}><div className = {servers.serverinner} /></div>
      <div className = {servers.j70server}><div className = {servers.serverinner} /></div>
    </div>
  </Layout>
)
export default ServersPage