import './footer.scss';

const Footer = () => {
  return (
    <div className='footer_container'>
      <div className="footer_column">
            <h3>Abstract</h3>
            <ul>
              <li>Branches</li>
              
            </ul>
          </div>
          <div className="footer_column">
            <h3>Resources</h3>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Community</h3>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div className="footer_column">
            <h3>Company</h3>
            <ul>
              <li>About Us</li>
              <li>Carrers</li>
              <li>Legal</li>
              <h3>Contact Us</h3>
              <li>info@abstract.com</li>
            </ul>
          </div>
          <div className="footer_last-column">
            <div className='footer_logo'></div>
            <h4>© Copyright 2022</h4>
            <h4>Abstract Studio Design, Inc.</h4>
            <h4>All rights reserved</h4>
            
          </div>
    </div>
  )
}

export default Footer;