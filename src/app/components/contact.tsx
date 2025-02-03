import Link from "next/link"
export default function Contact() {
    return (
    <div className="contactMainBody" id="contact">
    <h2> Lets <span>Contact Us</span></h2><br />
    <p>We would love to hear from you! Feel free to drop us a message.</p><br /><br />
    <div className="form-container">
            <div className="container">
                <form>
                    <input type="text" placeholder="Your Name" />
                    <input type="email" placeholder="Your Email" />
                    <input type="text" placeholder="Subject" />
                    <textarea placeholder="Your Message"></textarea>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-links">
                    <Link href="" target="_blank">
                        <button>LinkedIn</button>
                    </Link>
                    <Link href="https://github.com/AlishbaBasharat">
                        <button>GitHub</button>
                    </Link>
                </div>
                <div className="email-contact">
                    <p>Prefer direct email? Reach us at <a href="mailto:alishbaali4413.com">alishbaali4413@gmail.com</a></p>
                </div>
            </div>
    </div>
</div>

  )
}