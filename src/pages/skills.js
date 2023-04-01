import styles from "../styles/pages/Skills.module.css"

function Skills(){
    return(
        <div id="skills">
            <div className={styles.title}>SKILLS</div>
            <div className={styles.listSkills}>
                <div className={styles.items}>
                    <div className={styles.name}>HTML</div>
                    <div className={styles.evaluate} style="--point: 80%"></div>
                </div>
            </div>
        </div>
    )
}
export default Skills;