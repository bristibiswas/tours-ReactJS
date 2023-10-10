import React from 'react'


const Hero = () => {
  return (
   <>
    <section className="hero" id="home" style={{backgroundImage:'url(./images/hero-bg.jpg)', height: "300px",
      backgroundRepeat: "no-repeat"}}>
      <div className="hero-banner">
        <h1>Welcome to BackRoad</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">explore our tours</a>
      </div>
    </section>
   </>
  )
}

export default Hero
