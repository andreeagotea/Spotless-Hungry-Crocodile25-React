import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Spotless Hungry Crocodile25</title>
        <meta property="og:title" content="Spotless Hungry Crocodile25" />
      </Helmet>
    </div>
  )
}

export default Home
