const Footer = () => {
  return (
    <footer>
      <div className="container">

        <form className="newsletter">
          <label>Subscribe to updates</label>
          <input type="email" placeholder="Enter your email" required />
          <button type="submit">Subscribe</button>
        </form>

        <div className="social">
          <a href="https://x.com/dannwillz_" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://github.com/dannwillz" target="_blank" rel="noopener noreferrer">GitHub</a> | 
          <a href="https://www.linkedin.com/in/daniel-williams-5992953b3?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>

        <div className="footer-links">
          <a href="#privacy-policy">Privacy Policy</a> | 
          <a href="#terms-of-service">Terms of Service</a>
        </div>

      </div>

      <p>© 2026 InfiniteSpace</p>
    </footer>
  );
};

export default Footer;