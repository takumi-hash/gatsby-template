import * as React from "react"
import Layout from "../components/Layout.js"

const IndexPage = () => {
    return (
      <div>
          <Layout>
          <h1 className="text-3xl font-bold underline">Heading Text</h1>
          </Layout>
      </div>
  )
}

export default IndexPage

export const Head = () => <title>Page Title</title>
