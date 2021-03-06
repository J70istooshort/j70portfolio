/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 import { useStaticQuery, graphql } from "gatsby"
 
 import Header from "./header"
 import Footer from "./footer"

 import { pageContent, pageWrapper, footer} from './cssmodules/layout.module.css'
 import "./layout.css"

 const Layout: React.FC = ({ children }) => {

   const data = useStaticQuery(graphql`
     query SiteTitleQuery {
       site {
          siteMetadata {
            title
          }
        }
      }
   `)
 
   return (
     <>
      <div className = {pageWrapper}>

        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

        <main className = {pageContent}>{children}</main>

        <Footer className = {footer}/>
        
       </div>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout