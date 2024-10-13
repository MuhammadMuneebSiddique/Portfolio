
import css from "./page.module.css"

export default function Header(){
    return(
        <header className={css.header_section}>
            <h2 className={css.header_name}>Portfolio</h2>
            <div className={css.nav_bar}>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="./#about">About</a></li>
                    <li><a href="./#skill">Skill</a></li>
                    <li><a href="./#contact">Contact</a></li>
                </ul>
            </div>
        </header>
    )
}
