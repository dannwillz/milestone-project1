const Hero = () => {
  return (
    <section id="landing" className="hero">
      <video className="bg-video" autoPlay muted loop playsInline>
        <source src="/assets/videos/earth-in-space.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="container">
        <h1>INFINITESPACE</h1>
        <p>Explore our Solar System through data intelligence</p>

        <div className="cta-buttons">
          <a href="#solar-system" className="btn">Explore Data</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;