import styles from "../styles/pages/Projects.module.css";
// import Contacts from "./contacts";

function Projects() {
  return (
    <div className={styles.container}>
      <div id="projects">
        <h1 className={styles.title}>PROJECTS</h1>
        <div className={styles.listProjects}>
          <div className={styles.items}>
            <img src="/ppek.jpg" alt="@PPekKunGzDev" />
            <div className={styles.name}>@PPekKunGzDev</div>
          </div>
          <div className={styles.items}>
            <img
              src="https://friendscraft.ppekkungz.online/img/slide/1.jpg"
              alt="FriendsCraft Official"
              style={{ width: "78%", height: "85%" }}
            />
            <div className={styles.name}>@FriendsCraft.Website</div>
          </div>
          <div className={styles.items}>
            <img
              src="https://xplox.vikoperation.studio/avatar.png"
              alt="XPLOx Bot Discord"
              style={{ width: "73%" }}
            />
            <div className={styles.name}>XPLOx🍒 Discord Bot</div>
          </div>
          <div className={styles.items}>
            <img src="/ppek.jpg" alt="Sign in Out" />
            <div className={styles.name}>First. UI Sign in/out</div>
          </div>
          <div className={styles.items}>
            <img
              src="https://partygame.ppekkungz.online/logo.png"
              alt="@PartyGame"
            />
            <div className={styles.name}>PartyGames Project</div>
          </div>
          <div className={styles.items}>
            <img src="https://personal.ppekkungz.online/logo.png" alt="" />
            <div className={styles.name}>FriendsCraft Personal</div>
          </div>
          <div className={styles.items}>
            <img
              src="https://www.gbprimepay.com/dist/2020/img/logo.svg"
              alt=""
              style={{ width: "85%" }}
            />
            <div className={styles.name}>GB.PrimePay JS/PHP</div>
          </div>
          <div className={styles.items}>
            <img
              src="https://proxy.spigotmc.org/205c303fb38fcda4c18acdc061b8fd3669cab903?url=https%3A%2F%2Fcdn.discordapp.com%2Fattachments%2F976101285990387745%2F1067837582987243692%2FKmTab_-_Pl.png"
              alt=""
              style={{ width: "100%" }}
            />
            <div className={styles.name}>Plugin Minecraft</div>
          </div>
        </div>
      </div>
      {/* <Contacts/> */}
    </div>
  );
}
export default Projects;
