export default function Reviews() {
    return (
        <>
            <section id="reviews">
                <div className="reviews-header">
                    <h2>WHAT OUR CUSTOMERS ARE SAYING</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>

                <div className="reviews-card">
                    <div className="reviews-sub-card">
                        <div className="speech-bubble">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Doloribus
                                accusamus expedita repellat similique
                                odio aspernatur ex, architecto eaque
                                quo suscipit.
                            </p>
                        </div>

                        <div className="user-container">
                            <div>
                                <i className="fa-solid fa-circle-user" aria-hidden="true"></i>
                            </div>

                            <div>
                                <span className="user">Jeremy H.</span>
                                <br />
                                <span style={{color: '#8f8c8c'}}>Manager</span>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-sub-card">
                        <div className="speech-bubble">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Doloribus
                                accusamus expedita repellat similique
                                odio aspernatur ex, architecto eaque
                                quo suscipit.
                            </p>
                        </div>

                        <div className="user-container">
                            <div>
                                <i className="fa-solid fa-circle-user" aria-hidden="true"></i>
                            </div>

                            <div>
                                <span className="user">John S.</span>
                                <br />
                                <span style={{color: '#8f8c8c'}}>Freelancer</span>
                            </div>
                        </div>
                    </div>

                    <div className="reviews-sub-card">
                        <div className="speech-bubble">
                            <p>
                                Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit. Doloribus
                                accusamus expedita repellat similique
                                odio aspernatur ex, architecto eaque
                                quo suscipit.
                            </p>
                        </div>

                        <div className="user-container">
                            <div>
                                <i className="fa-solid fa-circle-user" aria-hidden="true"></i>
                            </div>

                            <div>
                                <span className="user">Susan W.</span>
                                <br />
                                <span style={{color: '#8f8c8c'}}>Photographer</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}