import styles from "../styles/pages/Skills.module.css";

function Skills() {
  return (
    <div className={styles.container}>
      <div id="skills">
        <h1 className={styles.title}>SKILLS</h1>
        <div className={styles.listSkills}>
          <div className={styles.items}>
            <div className={styles.name}>HTML</div>
            <div className={styles.evaluate}>
              <div className={styles.html_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>CSS</div>
            <div className={styles.evaluate}>
              <div className={styles.css_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>JavaScript</div>
            <div className={styles.evaluate}>
              <div className={styles.javascript_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>PHP</div>
            <div className={styles.evaluate}>
              <div className={styles.php_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>NextJS</div>
            <div className={styles.evaluate}>
              <div className={styles.nextjs_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>ReactJS</div>
            <div className={styles.evaluate}>
              <div className={styles.reactjs_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>Angular JS</div>
            <div className={styles.evaluate}>
              <div className={styles.angularjs_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>VueJS</div>
            <div className={styles.evaluate}>
              <div className={styles.vuejs_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>Typescript</div>
            <div className={styles.evaluate}>
              <div className={styles.typescript_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>NuxtJS</div>
            <div className={styles.evaluate}>
              <div className={styles.nuxtjs_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>Python</div>
            <div className={styles.evaluate}>
              <div className={styles.python_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>Java</div>
            <div className={styles.evaluate}>
              <div className={styles.java_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>Bootstrap</div>
            <div className={styles.evaluate}>
              <div className={styles.bootstrap_bar}></div>
            </div>
          </div>
          <div className={styles.items}>
            <div className={styles.name}>NodeJS</div>
            <div className={styles.evaluate}>
              <div className={styles.nodejs_bar}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Skills;
