import footerIcon from "./../assets/footer-icon.webp";
import { useNavigate } from "react-router-dom";

const Footer = () => {
    const redirect = useNavigate();

    const handlePrivacy = () => {
        redirect("/privacy");
      }
      const handleTerms = () => {
        redirect("/terms-conditions");
      }

    return(
        <footer>
          <div className="footer-section">
                <img src={footerIcon} alt="Footer logo" />
              <nav>
                  <span onClick={handlePrivacy}>Privacy Policy</span>
                  <span onClick={handleTerms}>Terms & Conditions</span>
              </nav>
          </div>
          <div className="footer-bottom">
            <p>All product names, logos, and brands are property of their respective owners. All company, product and service names used in this website are for identification purposes only. Use of these names, logos, and brands does not imply endorsement.</p>
          </div>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto&family=Space+Grotesk:wght@500&display=swap" rel="stylesheet"/>
      </footer>
    )
}

export default Footer;