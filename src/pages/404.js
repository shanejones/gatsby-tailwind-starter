import React from "react"

import Layout from "../components/layout"
import { GatsbySeo } from "gatsby-plugin-next-seo"

const NotFoundPage = () => (
  <Layout>
    <GatsbySeo title="Page Not Found" description="This is the description" />
    <div className="p-8">
      <h1 className="mb-4 font-bold text-2xl">Page not found</h1>

      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </div>
  </Layout>
)

export default NotFoundPage
