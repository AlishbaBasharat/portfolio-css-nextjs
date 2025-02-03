import Image from "next/image";
import Link from "next/link";
import image1 from "../data/health blog.jpg";
import image2 from "../data/counter application.jpg";
import image3 from "../data/number guessing.jpg";
import image4 from "../data/atm machine.jpg";
import image5 from "../data/quiz.jpg";
import image6 from "../data/to do list.jpg";
export default function Portfolio(){
    return(
        <div id="portfolio" className="portfolio">
            <div className="portfoliodetail">
                <h1 className="portfolioMainHeading"><span>My </span>Latest Projects</h1><br />
                <p className="portfoliopara">Explore my projects, showcasing my journey in frontend development and passion for building dynamic, user&ndash;friendly applications.</p>
            </div>
        <div className="parentContainer">
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image1}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <Link href="/"><button className="projectButton">Health Blog</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image2}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <Link href=""><button className="projectButton">Counter Application</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image3}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <Link href=""><button className="projectButton">Number Guessing Game</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image4}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <Link href=""><button className="projectButton">ATM Machine</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image5}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <Link href=""><button className="projectButton">Quiz Application</button></Link>
            </div>
            <div className="childContainer">
                <div className="imageContainer">
                    <Image
                        src={image6}
                        alt="image"
                        width={300}
                        height={300}
                        style={{ borderRadius: '5%' }}
                         />
                </div>
                <Link href=""><button className="projectButton">To Do List</button></Link>
            </div>
        </div>
        </div>
    )
}