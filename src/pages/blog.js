import * as React from 'react'
import Layout from '../components/layouts'
import { graphql } from 'gatsby'

const BlogPage = ({ data }) => {
  console.log('data', data)
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        Blog Page
        {
          data.allFile.nodes.map(node => (
            <li key={node.name}>
              { node.name }
            </li>
          ))
        }
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

// export const query = graphql`
//   query BlogPosts {

//   }
//     allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
//       nodes {
//         name
//       }
//     }
//   }
// `

export default BlogPage
