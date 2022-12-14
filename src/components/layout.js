import * as React from "react"
import Header from './header'
import Footer from './footer'

const Layout = (props) => {
    return (
        <div className="container mx-auto">
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout
