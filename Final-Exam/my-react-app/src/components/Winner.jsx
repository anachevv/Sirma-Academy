export default function Winner() {
  return (
    <>
        <section className="winner-section">
            <div className="winner-container">
                <div className="country-container">
                    <div id="congratulation">
                        <h2>Congratulations!</h2>
                    </div>

                    <div className="mini-container">
                        <div id="flag">
                            <img src="./winner-section/winner.png" alt="winner flag" />
                        </div>

                        <div id="country">
                            <h1>Spain</h1>
                        </div>
                    </div>


                    <div id="uefa-winners">
                        <h3>UEFA EURO winners</h3>
                    </div>
                </div>
            </div>

            <div className="trophy">
                <img src="./winner-section/trophy.png" alt="trophy" />
            </div>

            <div className="winner-card">
                <div className="spain">
                    <div>
                        <h2>Spain</h2>
                    </div>

                    <div>
                        <img src="./winner-section/winner.png" alt="spain" />
                    </div>
                </div>

                <div className="result">
                    <div>
                        <h2>2-1</h2>
                    </div>

                    <div className="highlights">
                        <div>
                            <img src="./winner-section/play.png" alt="play button" />
                        </div>
                        <div>
                            <span>Watch highlights</span>
                        </div>
                    </div>
                </div>
                
                <div className="england">
                    <div>
                        <img src="./winner-section/england.png" alt="england" />
                    </div>

                    <div>
                        <h2>England</h2>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}