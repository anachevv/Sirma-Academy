export default function Nav() {
    const redirectToHomepage = () => {
        window.location.href = "../../index.html";
    };

    return (
        <>
            <nav>
                <div id="logo-div">
                    <img id="logo" draggable="false" onClick={redirectToHomepage} src="./logo.png" alt="logo" />

                </div>

                <ul>
                    <li><a href="#features">Features</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#reviews">Reviews</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </>
    );
}