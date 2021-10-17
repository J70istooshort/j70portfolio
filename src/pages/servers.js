import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { serverbox,serverwrapper } from './cssmodules/pages.module.css'

const ServersPage = () => (
  <Layout>
    <Seo title="Servers" />

    <div className = {serverwrapper}>
     <div className = {serverbox}/>
     <div className = {serverbox}/>
     <div className = {serverbox}/>

     <div className = {serverbox}/>
     <div className = {serverbox}/>
     <div className = {serverbox}/>
    </div>
  </Layout>
)

export default ServersPage
