import Image from "next/image";
import Link from "next/link";

import mainMyPic from "../data/Main pic.png"

export default function Main() {
    return (
        <div className="main">
            <div className="maindetail">
                <h1 className="mainHeading">Hello It&apos;s me</h1>
                <h1 className=" mainMainHeading"><span> Alishba Basharat</span> </h1>
                <h2 className="mainHeadings">And I&apos;m a <span> Frontend Developer</span> </h2>
                <p className="mainpara">Creative and dedicated Frontend Developer, crafting responsive and engaging user experiences.</p>
                <Link href=""><button className="leftButton">Hire me</button></Link>
                <Link href="https://github.com/AlishbaBasharat"><button className="rightButton">See Projects</button></Link>
            </div>
            <div className="mypic">
                <Image className="picture"
                    src={mainMyPic}
                    alt={"alishba"}
                    width={400}
                    height={400}
                />
            </div>
        </div>
    )
}