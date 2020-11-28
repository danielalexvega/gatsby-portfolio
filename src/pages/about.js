import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

const About = ({ data: { about: { nodes } } }) => {
  console.log(nodes);
  const { infoParagraph, tech, title, image } = nodes[0];

  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <Image fluid={image.childImageSharp.fluid} className="about-img" />
        <article className="about-text">
          <Title title={title} />
          {infoParagraph.map(paragraph => {
            return <p key={paragraph.id}>
              {paragraph.paragraph}
            </p>
          })}
          <div className="about-stack">
            {tech.map(item => {
              return <span key={item.id}> {item.tech}</span>
            })}
          </div>

        </article>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
  {
    about:allStrapiAboutMe {
      nodes {
        title
        infoParagraph {
          id
          paragraph
        }
        tech {
          id
          tech
        }
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default About;
