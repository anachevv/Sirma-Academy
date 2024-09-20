export default function Features() {
    return (
        <>
            <section className="features">
                <hr />
                <div className="main-features">
                    <div className="tabs">
                        <button className="active" onClick={() => openTab(event, 'Tab1')}>TAB 1</button>
                        <button onClick={() => openTab(event, 'Tab2')}>TAB 2</button>
                        <button onClick={() => openTab(event, 'Tab3')}>TAB 3</button>
                    </div>

                    <div className="tabs-content">
                        <h3 id="features">Tabs with soft transitioning effect.</h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean
                            euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                            accumsan et viverra justo commodo. Proin sodaies pulvinar tempor. Cum sociis natoque
                            penatibus et magnis dis parturient montes.
                        </p>

                        <p>
                            Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean
                            euismod bibendum laoreet.
                        </p>

                        <button>Download</button>
                    </div>

                    <div className="tabs-image">
                        <img src="/tabs-images/img1.png" alt="img1" />
                    </div>

                </div>
            </section>
        </>
    );
}