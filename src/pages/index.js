import Facebook from "@mui/icons-material/Facebook";
import Instagram from "@mui/icons-material/Instagram";
import Twitter from "@mui/icons-material/Twitter";
import GitHub from "@mui/icons-material/GitHub";
//
import main from "../styles/Home.module.css";
//
import Skills from "./skills";
import Projects from "./projects";

export default function Home() {
  return (
    <div className={main.container}>
      <div className={main.banner} id="home">
        <div className={main.content}>
          <p>WELCOME TO MY PROFILE</p>
          <h1>
            Hi, I'm PPekKunGz <br />
            a&nbsp;
            <div className={main.gradiantText}>
              <div
                className={main.job}
                data-job1="{Developer.}"
                data-job2="{FrontEnd.}"
              ></div>
            </div>
          </h1>
          <h2>REACT FRAMEWORK</h2>
          <p>
            สวัสดี! นี่คือหน้าแนะนำตัวของ @PPekKunGzDev <br />
            มาทำความรู้จักกันนะ ผมมีชื่อจริงๆว่า <b>"เพ็ก"</b> นะครับผม! <br />
            สามารถรับชมหรือช่องทางการติดต่อ ได้ทั้งหมดที่ด้านล่างเลย!!
          </p>
          <div className={main.find}>
            <h3>CONTACT WITH ME</h3>
            <ul>
              <a
                href="https://www.facebook.com/kittipat.lintajaka/"
                target="_blank"
                rel="noreferrer"
                className={main.logo}
              >
                <li>
                  <Facebook />
                </li>
              </a>
              <a
                href="https://www.instagram.com/pek.kkkkkkk/"
                target="_blank"
                rel="noreferrer"
                className={main.logo}
              >
                <li>
                  <Instagram />
                </li>
              </a>
              <a
                href="https://twitter.com/@PPekKunGzDev"
                target="_blank"
                rel="noreferrer"
                className={main.logo}
              >
                <li>
                  <Twitter />
                </li>
              </a>
              <a
                href="https://github.com/PPekKunGz"
                target="_blank"
                rel="noreferrer"
                className={main.logo}
              >
                <li>
                  <GitHub />
                </li>
              </a>
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
      <Skills />
      <Projects />
    </div>
  );
}
