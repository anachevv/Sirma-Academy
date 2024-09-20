export default function Header() {
    return (
        <>
            <div className="main-content">
                <header>
                    <img draggable="false" src="/logo2.png" alt="header logo" style={{marginLeft: '5px', marginBottom: '10px'}} />

                    <h2>
                        MODERN AXURE TEMPLATE<br />FOR BEAUTIFUL PROTOTYPES
                    </h2>
                    <hr id="for" />

                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Aenean
                        <br />euismod bibendum laoreet. Proin gravida dolor sit amet lacus
                        <br />accumsan et viverra justo commodo.
                    </p>

                    <button>Download</button>
                </header>

                <div className="form-container">
                    <h2>Try Your <span className="free-trial">FREE</span> Trial Today</h2>
                    <form action="#" method="post">
                        <input type="text" name="name" placeholder="Name" required />
                        <input type="email" name="email" placeholder="Email" required />
                        <input type="password" name="password" placeholder="Password" required />
                        <div id="btn">
                            <input type="submit" value="Get Started" />
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}