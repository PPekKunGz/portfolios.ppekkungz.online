import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
import main from "../styles/Home.module.css";
import Skills from "./skills";

export default function Home() {
  return (
    <div className={main.container}>
      <div className={main.banner}>
        <div className={main.content}>
          <p>WELCOME TO MY PROFILE</p>
          <h1>
            Hi, I'm PPekKunGz <br />a&nbsp;
            <div className={main.gradiantText}>
              <div
                className={main.job}
                data-job1="{Developer.}"
                data-job2="{FrontEnd.}"
              ></div>
            </div>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, quisquam quas ut, aliquam culpa impedit expedita
            tenetur reiciendis, quia cupiditate fuga pariatur sunt ratione
            mollitia quibusdam possimus ipsam velit! Officia.
          </p>
          <div className={main.find}>
            <h3>CONTACT WITH ME</h3>
            <ul>
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
        </div>
        <div className={main.avatar}>
          <img
            src="https://cdn.discordapp.com/attachments/969140605756256266/1091539370449834016/ppek.png"
            alt="@PPekKunGzDev"
          />
        </div>
      </div>
      <Skills/>
    </div>
  );
}
