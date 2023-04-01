import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import styles from "../styles/pages/Contacts.module.css";

function Contacts() {
  return (
    <div id="contacts">
      <h1 className={styles.title}>CONTACTS</h1>
      <ul className={styles.contacts}>
        <li>
          <Facebook />
        </li>
        <li>
          <Instagram />
        </li>
        <li>
          <Twitter />
        </li>
        <li>
          <GitHub />
        </li>
      </ul>
    </div>
  );
}
export default Contacts;
