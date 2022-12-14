import * as React from "react"
import { Link } from "gatsby"

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
                    {links.map(link => (
                      <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
                        <span>
                          <a
                            style={linkStyle}
                            href={`${link.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
                          >
                            {link.text}
                          </a>
                          {link.badge && (
                            <span style={badgeStyle} aria-label="New Badge">
                              NEW!
                            </span>
                          )}
                          <p style={descriptionStyle}>{link.description}</p>
                        </span>
                      </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Header
