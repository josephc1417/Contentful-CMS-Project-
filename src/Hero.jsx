import hero from './assets/hero.svg'

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-center'>
        <div className='hero-title'>
        <h1>Contentful CMS</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur 
          adipisicing elit. Adipisicing elit. adipisicing elit. Ea,lorem 
        </p>
        </div>
        <div className='img-container'>
          <img src={hero} alt='hero image' className='img' />
        </div>
      </div>
    </section>
  )
}

export default Hero
