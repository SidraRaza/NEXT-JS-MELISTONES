// import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from "../component/Header";
import "./contact.css";

export default function AboutHeader() {
  return (
    <>
      <Header />

      <div className="background-section">
        <h1 className="title">Contact Us</h1>
        <p className="subtitle">Below are the details to reach out to me!</p>

        <div className="contact-info">
          <div className="info-box">
            <h3 className="info-title">Address</h3>
            <p className="info-text">Mehran Town Karachi</p>
          </div>

          <div className="info-box">
            <h3 className="info-title">Email</h3>
            <p className="info-text">ahed880011@gmail.com</p>
          </div>

          <div className="info-box">
            <h3 className="info-title">LinkedIn</h3>
            <a
              href="https://www.linkedin.com/in/sidra-raza-9442132b9"
              className="info-link"
            >
              View Profile
            </a>
          </div>

          <div className="info-box">
            <h3 className="info-title">Github</h3>
            <a href="https://github.com/SidraRaza" className="info-link">
              View Profile
            </a>
          </div>
        </div>

        <div className="form-container">
          <form className="contact-form">
            <h2 className="form-title">Send Message</h2>
            <div className="form-group">
              <input type="text" id="name" className="form-input" required />
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
            </div>
            <div className="form-group">
              <input type="email" id="email" className="form-input" required />
              <label htmlFor="email" className="form-label">
                Email
              </label>
            </div>
            <div className="form-group">
              <textarea
                id="message"
                className="form-textarea"
                required
              ></textarea>
              <label htmlFor="message" className="form-label">
                Type Your Message...
              </label>
            </div>
            <div className="form-submit">
              <input type="submit" value="Send" className="submit-button" />
            </div>
          </form>
        </div>
      </div>

      <a href="#" id="backToTopBtn" className="back-to-top">
        Top
      </a>
    </>
  );
}
