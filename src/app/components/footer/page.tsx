import css from "./page.module.css"
import github from "../image/github.png"
import linkedin from "../image/linkedin.png"
import email from "../image/email.png"
import Image from "next/image"

export default function Footer(){
    return(
        <div>
            <div className={css.footer_section}>
                <h2>Portfolio</h2>    
                <div className={css.contact_icon}>
                    <a href="https://github.com/MuhammadMuneebSiddique">
                        <Image
                        src={github}
                        alt="image"
                        className={css.img}
                        />
                    </a>
                    <a href="https://www.linkedin.com/in/muhammad-muneeb-6a5a86323?">
                        <Image
                        src={linkedin}
                        alt="image"
                        className={css.img}
                        />
                    </a>
                    <a href="mailto:siddiquimuneeb894@gmail.com">
                        <Image
                        src={email}
                        alt="image"
                        className={css.img}
                        />
                    </a>
                </div>
                <p>&copy; 2024 Portfolio . All Right Reserved | Design by Muhammad Muneeb</p>
            </div>
        </div>
    )
}