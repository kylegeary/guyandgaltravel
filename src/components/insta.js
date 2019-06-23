import React from 'react'
import Image from 'gatsby-image'
import useInstagram from '../hooks/use-instagram'

import './insta.css'

const Insta = () => {
  const instaPhotos = useInstagram()
  const { username } = instaPhotos[0]

  return (
    <>
      <h2>
        Follow us{' '}
        <a className="instagram-link" href={`https://instagram.com/@{username}`}>@GuyAndGalTravel</a>
      </h2>
      <div className="instagram-items">
        {instaPhotos.map(photo => (
          <a key={photo.id} href={`https://instagram.com/p/${photo.id}`}>
            <Image
              className="instagram-item"
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a href={`https://instagram.com/${username}`}>
        See more on Instagram &rarr;
      </a>
    </>
  )
}

export default Insta
