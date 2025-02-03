import Image from "next/image";
import aboutMyPic from "../data/About pic.png"
export default function About(){
    return(
        <div id="about" className="about">
            <div className="aboutmypic">
            <Image
            src={aboutMyPic}
            alt="alishba2"
            width={400}
            height={400}
            />
            </div>
            <div className="aboutdetail">
                <h1 className="aboutMainHeading">About <span>Me</span></h1>
                <p className="aboutpara"> Highly motivated and enthusiastic learner, currently expanding my skillset in: <br /> <br />
                    &ndash; Certified Cloud Applied Generative AI Engineering at Governor House. <br />
                    &ndash; Modern Web Application Development at Saylani Mass IT Training Program SMIT. <br /> <br />
                    I am passionate about exploring the latest technologies and techniques in AI, cloud computing, and web development. I am excited to leverage my knowledge and skills to drive innovation and growth in the industry.
                    </p>
            </div>
        </div>
    )
}