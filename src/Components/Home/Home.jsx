import React from 'react'
import './Home.css'
import Social from './Social'
import Data from './Data'
const Home = () => {
    return (
      <section id="home" className="home section">
        <div className="home-container container grid">
            <div className="home-content grid">
                <Social/>
                <div className="home-image"></div>
                <Data/>
            </div>
        </div>
      </section>
    )
}

export default Home