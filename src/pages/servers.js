import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import { serverbox,serverwrapper,serverboxwrapper } from '../components/cssmodules/pages.module.css'

const ServersPage = () => (
  <Layout>
    <Seo title="Servers" />

    <div className = {serverwrapper}>
     <div className = {serverboxwrapper}><div className = {serverbox}/></div>
     <div className = {serverboxwrapper}><div className = {serverbox}/></div>
     <div className = {serverboxwrapper}><div className = {serverbox}/></div>
     <div className = {serverboxwrapper}><div className = {serverbox}/></div>
     <div className = {serverboxwrapper}><div className = {serverbox}/></div>
     <div className = {serverboxwrapper}><div className = {serverbox}/></div>
    </div>
  </Layout>
)

export default ServersPage
