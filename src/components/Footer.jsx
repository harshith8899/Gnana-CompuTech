import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Gnana CompuTech Solutions logo" />
              <span>Gnana CompuTech</span>
            </div>
            <p className="footer-tag">
              Education technology built by people who've stood in front of
              a classroom — and behind a codebase.
            </p>
          </div>
          <div>
            <h4>Navigate</h4>
            <ul>
              <li><Link to="/#about">About Us</Link></li>
              <li><Link to="/#courses">Courses</Link></li>
              <li><Link to="/#services">Services</Link></li>
              <li><Link to="/#testimonials">Testimonials</Link></li>
            </ul>
          </div>
          <div>
            <h4>Programs</h4>
            <ul>
              <li><Link to="/courses/full-stack-java-developer">Full Stack Java</Link></li>
              <li><Link to="/courses/server-admin-cloud-computing">Cloud &amp; Server Admin</Link></li>
              <li><Link to="/courses/networking-cybersecurity">Cybersecurity</Link></li>
              <li><Link to="/courses/ai-machine-learning">AI &amp; Machine Learning</Link></li>
            </ul>
          </div>
          <div>
            <h4>Contact</h4>
            <ul>
              <li>+91 97425 43939</li>
              <li>gnanacomputech@gmail.com</li>
              <li>Sunkadakatte, Bengaluru</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2026 Gnana CompuTech Solutions Pvt. Ltd. All rights reserved.</span>
          <span>Designed for a paperless classroom.</span>
        </div>
      </div>
    </footer>
  )
}
