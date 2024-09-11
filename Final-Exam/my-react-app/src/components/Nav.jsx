export default function Nav() {
    const redirectToHomepage = () => {
        window.location.href = "../../index.html";
    };

    return (
        <>
            <nav>
                <div id="logo-div">
                    <img id="logo" draggable="false" onClick={redirectToHomepage} src="./nav-section/logo.svg" alt="logo" />

                </div>

                <div id="ul">
                    <ul>
                        <li><a href="#matches">Matches</a></li>
                        <li><a href="#groups">Groups</a></li>
                        <li><a href="#video">Video</a></li>
                        <li><a href="#stats">Stats</a></li>
                        <li><a href="#gaming">Gaming</a></li>
                        <li><a href="#teams">Teams</a></li>
                        <li><a href="#news">News</a></li>
                        <li><a href="#tickets">Tickets</a></li>
                        <li><a href="#event-guide">Event guide</a></li>
                        <li><a href="#history">History</a></li>
                        <li><a href="#more">More</a></li>
                    </ul>
                </div>

            </nav>
        </>
    );
}