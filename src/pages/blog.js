import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"


const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
  return <Layout>
    <section className="blog-page">
      <Blogs blogs={blogs} title="blog" />
    </section>
  </Layout>
}


export const query = graphql`
  {
    allStrapiBlogs {
      nodes {
        category
        date(formatString: "MMMM Do, YYYY")
        id
        slug
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        description
      }
    }
  }
`

export default Blog
