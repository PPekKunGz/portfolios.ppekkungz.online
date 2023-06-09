import nav from "../../src/styles/components/layouts/Header.module.css"
function Header() {
    return(
        <header className={nav.header}>
            <div className={nav.logo}>
                <img src="https://cdn.discordapp.com/attachments/969140605756256266/1090109695152373840/logo.png" alt="Logo" />
            </div>
            <ul className={nav.navbar}>
                <li><a href="">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
        </header>
    )
}
export default Header;
