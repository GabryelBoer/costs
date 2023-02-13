import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

import styles from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className={styles.copy_right}>
        <span>Costs</span> &copy; 2023
      </p>
    </footer>
  );
}

export default Footer;
