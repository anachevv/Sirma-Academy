export default function About() {
    return (
        <>
            <section id="about">
                <div className="about-header">
                    <h2>WHY THIS IS AWESOME</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>

                <div className="card">
                    <div className="sub-card">
                        <i className="fa-regular fa-lightbulb"></i>
                        <h3>Thoughtful Design</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                            gravida dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>

                    <div className="sub-card">
                        <i className="fa-regular fa-keyboard"></i>
                        <h3>Well Crafted</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                            gravida dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>

                    <div className="sub-card">
                        <i className="fa-solid fa-bolt-lightning"></i>
                        <h3>Easy to Customize</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin
                            gravida dolor sit amet lacus accumsan et viverra.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}