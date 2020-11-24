import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: ASC}) {
      nodes {
        company
        date
        position
        desc {
          id
          name
        }
        strapiId
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query);
  const { allStrapiJobs: { nodes: jobs } } = data;
  const [value, setValue] = useState(0);

  const { company, position, date, desc } = jobs[value];


  return <section className="section jobs">
    <Title title="experience" />
    <div className="jobs-center">
      <div className="btn-container">
        {jobs.map((job, index) => {
          return (
            <button
              onClick={() => setValue(index)}
              key={job.strapiId}
              className={`job-btn ${index === value && 'active-btn'}`}>
              {job.company}
            </button>)
        })}
      </div>
    </div>

  </section>
}

export default Jobs;
