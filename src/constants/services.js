import React from "react"
import { FaNodeJs, FaJs, FaPizzaSlice } from "react-icons/fa"
export default [
  {
    id: 1,
    icon: <FaJs className="service-icon" />,
    title: "Frontend Development",
    text: `React, Gatsby, or plain vanilla JavaScript. Throw in some Bootstrap, or Semantic UI, or some other CSS framework. I love the challenges of frontend development.`,
  },
  {
    id: 2,
    icon: <FaNodeJs className="service-icon" />,
    title: "Backend Development",
    text: `GraphQL, MySQL, PostgreSQL, or some other query language, and Node.js with Express. There are many ways to tackle backend development. `,
  },
  {
    id: 3,
    icon: <FaPizzaSlice className="service-icon" />,
    title: "Fullstack Development",
    text: `Put it all together; approaching a problem from all angles, it's a supreme pizza. All the ingrediants, including pineapple.`,
  },
]
