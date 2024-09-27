import { redirectToHomepage } from "../utils/redirectToHomepage";

export default function Footer() {
    return (
        <>
            <footer>
                <div className="footer-container">
                    <div id="footer-logo">
                        <img draggable="false" onClick={redirectToHomepage} src="./footer-section/logo.png" alt="uefa logo" />
                    </div>

                    <div className="webpages">
                        <ul>
                            <li><a href="#matches">Matches</a></li>
                            <li><a href="#groups">Groups</a></li>
                            <li><a href="#video">Video</a></li>
                            <li><a href="#stats">Stats</a></li>
                            <li><a href="#gaming">Gaming</a></li>
                            <li><a href="#teams">Teams</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#tickets">Tickets</a></li>
                        </ul>
                    </div>
                </div>

                <div className="privacy">
                    <div className="tabs">
                        <ul>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Terms & conditions</a></li>
                            <li><a href="">Cookie policy</a></li>
                        </ul>
                    </div>

                    <div className="info">
                        <div>
                            <span>&copy;1998-2024 UEFA. All rights reserved.</span>
                        </div>
                        
                        <div>
                            <p>
                            The UEFA word, the UEFA logo and all marks related to UEFA competitions, are protected by trademarks and/or copyright of UEFA. No use for commercial purposes may be made of such trademarks. Use of UEFA.com signifies your agreement to the Terms and Conditions and Privacy Policy.
                            </p>
                        </div>

                    </div>
                </div>

                <div class="euro"></div>
            </footer>
        </>
    );
}