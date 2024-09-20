export default function Contact() {
    return (
        <>
            <section id="contact">
                <div className="contact-container">
                    <div className="contact-header">
                        <h2>CONTACT US</h2>
                        <hr />
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                    </div>

                    <div className="form-cntr">
                        <form action="#" method="post">
                            <div className="form-sub-container">
                                <div>
                                    <input type="text" name="name" placeholder="Name" required />
                                    <input type="email" name="email" placeholder="Email" required />
                                    <input type="text" name="subject" placeholder="Subject" required />
                                </div>

                                <div>
                                    <textarea name="message" placeholder="Message" required></textarea>
                                </div>
                            </div>

                            <input type="submit" value="Send Message" />
                        </form>
                    </div>
                </div>

            </section>
        </>
    );
}