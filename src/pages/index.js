import * as React from "react"
import Header from "../components/header.js"

const IndexPage = () => {
    return (
      <div>
          <Header/>
          <h1>Heading Text</h1>
      </div>
  )
}

export default IndexPage

export const Head = () => <title>Page Title</title>
