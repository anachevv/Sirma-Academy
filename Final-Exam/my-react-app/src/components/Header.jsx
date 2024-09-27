export default function Header() {
    return (
        <>
            <header>
                <div id="header-div">
                    <img id="header-logo" draggable="false" src="./header-section/uefa-logo.svg" alt="uefa logo" />
                    <img id="more-arrow" draggable="false" src="./header-section/more-arrow.jpg" alt="more" />
                </div>

                <div id="login-container">
                    <div>
                        <span><a href="#">Login</a></span>
                    </div>

                    <div>
                        <img src="./header-section/login-logo.png"></img>
                    </div>
                </div>
            </header>
        </>
    );
}