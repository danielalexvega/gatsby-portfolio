import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Blogs from "../components/Blogs";
import SEO from "../components/SEO";


const Blog = ({ data: { allStrapiBlogs: { nodes: blogs } } }) => {
  return <Layout>
    <SEO title="Blog"
      description="Blogs by Daniel Vega; where he keeps his thoughts." />
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

export default Blog;
