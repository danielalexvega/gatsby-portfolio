import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO";

const Error = () => {
  return <Layout>
    <SEO title="Our bad." description="This page doesn't exist. That's our bad. Or it's your bad." />
    <main className="error-page">
      <div className="error-container">
        <h1>My bad.</h1>
        <h3>This page doesn't exist.</h3>
        <Link to='/' className='btn'>Go back home.</Link>
      </div>
    </main>
  </Layout >
}

export default Error
