import * as React from "react"

const links =   [{
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },
    {
    text: "Tutorial",
    url: "https://www.gatsbyjs.com/docs/tutorial/",
    description:
      "A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site.",
    color: "#E95800",
  },]

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    {links.map((link, index) => (
                      <li key={index}>
                        <span>
                          <a
                            href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                          >
                            {link.text}
                          </a>
                          {link.badge && (
                            <span aria-label="New Badge">
                              NEW!
                            </span>
                          )}
                          <p>{link.description}</p>
                        </span>
                      </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
