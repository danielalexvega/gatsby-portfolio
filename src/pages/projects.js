import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Projects from "../components/Projects";
import SEO from "../components/SEO";

const ProjectsPage = ({
  data: { allStrapiProjects: { nodes: projects } }
}) => {

  return <Layout>
    <SEO title="Projects" descriptions="All of Daniel Vega's projects. Check back for more over time." />
    <section className="projects-page">
      <Projects projects={projects} title="all projects" />
    </section>
  </Layout>
}

export const query = graphql`
  {
    allStrapiProjects {
      nodes {
        description
        github
        id
        title
        url
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          tech
        }
      }
    }
  }
`

export default ProjectsPage;
