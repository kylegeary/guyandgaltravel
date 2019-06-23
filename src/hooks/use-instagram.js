import { graphql, useStaticQuery } from 'gatsby'

const useInstagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        nodes {
          id
          likes
          comments
          mediaType
          preview
          original
          timestamp
          caption
          username
          localFile {
            childImageSharp {
              fluid {
                base64
                aspectRatio
                src
                srcSet
                sizes
              }
            }
          }
        }
      }
    }
  `)

  return data.allInstaNode.nodes.map(node => ({
    ...node.localFile.childImageSharp,
    id: node.id,
    caption: node.caption,
    username: node.username
  }))
}

export default useInstagram
