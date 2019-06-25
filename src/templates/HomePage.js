import React from 'react'
import { graphql, Link } from 'gatsby'
import Insta from '../components/insta'
import PageHeader from '../components/PageHeader'
import Content from '../components/Content'
import Layout from '../components/Layout'

import './HomePage.css'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ title, subtitle, featuredImage, body }) => (
  <main className="Home">
    <PageHeader
      large
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
    />

    <section className="section">
      <div className="home__bio">
        <div className="home__bio-image" backgroundImage={featuredImage}></div>
        <div className="home__bio-text">
          <h1>Meet Guy & Gal</h1>
          <p>
            Hey there! We’re Chris and Paige Fellows, newlyweds embarking on the
            ultimate around-the-world adventure: 365 days, 6 continents, 2
            backpacks and countless memories to be made. Follow us as we say
            goodbye to our 9-5 jobs and hello to living life to the fullest, one
            day and destination at a time.
          </p>
          <h2>Who’s that guy?</h2>
          <p>
            It’s Chris! Traveling has been a passion of mine since backpacking
            with my dad and grandpa in fifth grade. Since then, I’ve had the
            opportunity to immerse myself in many different cultures, while
            stretching myself beyond my comfort zone. All of this and more had
            made me who I am today – a history teacher, lifelong learner, and
            adventure seeker.
          </p>
          <h2>Who’s that gal?</h2>
          <p>
            It’s Paige! I’m 27 years old and realizing one of my oldest and
            dearest dreams – traveling the world. Seriously, someone pinch me!
            Travel has always brought an unexplainable peace and perspective to
            my life that few things do, and I can’t wait to dedicate a full year
            to what I love with my favorite guy. Bring on the world!
          </p>
        </div>
      </div>
      <div className="container">
        <h2 className="section-title">Latest Posts</h2>
        <Link className="more-link" to="/blog">
          See&nbsp;more&nbsp;&rarr;
        </Link>

        <Content source={body} />
      </div>
    </section>
    <div className="container taCenter">
      <Insta />
    </div>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        subtitle
        featuredImage
      }
    }
  }
`
