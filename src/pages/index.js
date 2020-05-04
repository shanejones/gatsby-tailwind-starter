import React from "react"

import Layout from "../components/layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const IndexPage = () => (
  <Layout>
    <GatsbySeo title="Home" description="This is the description" />
    <div className="p-8">
      <h1 className="mb-4 font-bold text-2xl">This is the start</h1>
      <p>Go build something!</p>
    </div>
  </Layout>
)

export default IndexPage
