export default function Sublist() {
    return (
        <>
            <section className="sub-list">
                <div className="main-sublist">
                    <div id="sublist-img">
                        <img src="/sublist-image.jpg" alt="sublist img" />
                    </div>
                    <div className="sublist-content">
                        <div className="sublist-container">
                            <h3>Sub list section</h3>
                            <hr />
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean
                                euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                                accumsan et viverra justo commodo.
                            </p>
                        </div>

                        <div className="sublist-icons">
                            <div className="sub-container">
                                <div>
                                    <i className="fa-regular fa-circle-down"></i>
                                </div>

                                <div>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean
                                        euismod bibendum laoreet.</p>
                                </div>
                            </div>

                            <div className="sub-container">
                                <div>
                                    <i className="fa-regular fa-circle-down"></i>
                                </div>

                                <div>
                                    <h4>Title</h4>
                                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                                        Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}