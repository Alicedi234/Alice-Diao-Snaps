import "./Footer.scss";
import facebookIcon from "../../assets/Icons/Facebook.svg";
import twitterIcon from "../../assets/Icons/X_twitter.svg";
import instagramIcon from "../../assets/Icons/Instagram.svg";
import pinterestIcon from "../../assets/Icons/Pinterest.svg";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Snaps</h1>
        <div className="footer__container2">
          <ul className="footer__list1">
            <li className="footer__list1--item">For Photographers</li>
            <li className="footer__list1--item">Hire talent</li>
            <li className="footer__list1--item">Inspiration</li>
          </ul>
          <ul className="footer__list2">
            <li className="footer__list2--item">About</li>
            <li className="footer__list2--item">Careers</li>
            <li className="footer__list2--item">Support</li>
          </ul>
        </div>
      </div>
      <ul className="footer__logo">
        <li>
          <a href="https://www.facebook.com/">
            <img src={facebookIcon} alt="facebook" />
          </a>
        </li>
        <li>
          <a href="https://www.twitter.com/">
            <img src={twitterIcon} alt="twitter" />
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/">
            <img src={instagramIcon} alt="instagram" />
          </a>
        </li>
        <li>
          <a href="https://www.pinterest.com/">
            <img src={pinterestIcon} alt="pinterest" />
          </a>
        </li>
      </ul>
      <ul className="footer__copyright">
        <li className="footer__copyright--item">© 2024 Snaps</li>
        <li className="footer__copyright--item">. Terms</li>
        <li className="footer__copyright--item">Privacy</li>
        <li className="footer__copyright--item">Cookies</li>
      </ul>
    </div>
  );
}
