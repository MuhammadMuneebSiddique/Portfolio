import Image from "next/image";
import css from "./page.module.css"
import profile from "../image/gw8s+6XmmfXLFbmXzc1WQQXgCQCf+68efAPyjLELq+olIAAAAABJRU5ErkJggg__-removebg-preview.png"
import pic from "../image/8795c6ac-e855-46c6-b953-ee698e4ef8cf-removebg-preview.png"
import item1 from "../image/coding.png"
import item2 from "../image/responsive-page.png"
import item3 from "../image/research.png";
import item4 from "../image/trend.png";
import item5 from "../image/customer-support.png";
import github from "../image/github.png"
import linkedin from "../image/linkedin.png"
import email from "../image/email.png"
import item6 from "../image/video-editor.png" 


export default function Main(){
    return(
        <div>
            <main className={css.main_section}>
                <div className={css.main}>
                    {/* <Header/> */}
                    <section className={css.main_section_01}>
                        <div className={css.left_side_01}>
                            <h3>Hello, Its me</h3>
                            <h2>Muhammad Muneeb</h2>
                            <h3>And I am a <span>Frontend Developer</span></h3>
                            <p>An enthusiastic, motivated developer with increasing knowledge in front-end technologies such as HTML, CSS, JavaScript, and React.js.</p>
                            <div>
                                <button>Hire Me</button>
                            </div>   
                        </div>
                        <div className={css.right_side_01}>
                            <div>
                                <Image 
                                className={css.img}
                                src={profile}
                                alt="profile picture"
                                />
                            </div>
                        </div>
                    </section>
                </div>    
                <section className={css.main_section_02}>
                    <div className={css.left_side_02}>
                        <Image
                        src={pic}
                        alt="image"
                        className={css.img}
                        />                   
                    </div>
                    <div className={css.right_side_02}>
                        <p>MY BIOGRAPHY</p>
                        <h2>a lead UI designer & web developer based in pakistan</h2>
                        <p>An enthusiastic, motivated developer with increasing knowledge in front-end technologies such as HTML, CSS, JavaScript, and React.js.</p>
                        <div className={css.details}>
                            <div>
                                <p><span>name: </span> Muhammad Muneeb</p>
                                <p><span>from: </span> Pakistan</p>
                            </div>
                            <div>
                                <p><span>email: </span> siddiquimuneeb@gamil.com</p>
                                <p><span>phone: </span> 03152040559</p>
                            </div>
                        </div>
                        <div className={css.social_accounts}>
                            <h4>Follow me on</h4>
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
                        </div>    
                        <div className={css.btn}>
                            <button className={css.btn1}>hire me</button>
                            <button className={css.btn2}>Dowload CV</button>
                        </div>
                    </div>
                </section>
                <section className={css.main_section_03}>
                    <div className={css.left_side_03}>
                        <div className={css.container}>
                            <div className={css.item}>
                                <span>
                                    <Image
                                    src={item1}
                                    alt="image"
                                    className={css.img}
                                    />
                                </span>
                                <span>
                                    <h2>Web Development</h2>
                                    <p>Creating dynamic and responsive websites that deliver seamless user experiences and bring ideas to life.</p>
                                </span>
                            </div>
                            <div className={css.item}>
                                <span>
                                    <Image
                                    src={item2}
                                    alt="image"
                                    className={css.img}
                                    />
                                </span>
                                <span>
                                    <h2>Responsive Design</h2>
                                    <p>Responsive design allows websites to adapt to any device or screen size for an optimal user experience.</p>
                                </span>
                            </div>
                        </div>
                        <div className={css.container}>
                            <div className={css.item}>
                                    <span>
                                        <Image
                                        src={item3}
                                        alt="image"
                                        className={css.img}
                                        />
                                    </span>
                                    <span>
                                        <h2>Research & Analysis</h2>
                                        <p>Research & Analysis in web development focuses on understanding user needs and trends to build effective, data-driven websites.</p>
                                    </span>
                                </div>
                                <div className={css.item}>
                                    <span>
                                        <Image
                                        src={item4}
                                        alt="image"
                                        className={css.img}
                                        />
                                    </span>
                                    <span>
                                        <h2>Design Trends</h2>
                                        <p>Design trends are the evolving styles and techniques in visual design that shape the look and feel of websites and applications</p>
                                    </span>
                                </div>            
                            </div>
                        <div className={css.container}>
                            <div className={css.item}>
                                <span>
                                    <Image
                                    src={item5}
                                    alt="image"
                                    className={css.img}
                                    />
                                </span>
                                <span>
                                    <h2>Customer Support</h2>
                                    <p>
                                    Customer support helps assist customers with inquiries and issues, ensuring a positive experience.</p>
                                </span>
                            </div>
                            <div className={css.item}>
                                <span>
                                    <Image
                                    src={item6}
                                    alt="image"
                                    className={css.img}
                                    />
                                </span>
                                <span>
                                    <h2>Video Editor</h2>
                                    <p>
                                    I enjoy crafting videos that tell compelling stories, blending creativity with precise editing. Its all about bringing visuals to life!</p>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className={css.right_side_03}>
                        <Image 
                        src={profile}
                        alt="image"
                        className={css.img}
                        />
                    </div>
                </section>
            </main>    
        </div>
    );
}