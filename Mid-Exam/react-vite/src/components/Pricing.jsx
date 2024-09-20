export default function Pricing() {
    return (
        <>
            <section id="pricing">
                <div className="pricing-header">
                    <h2>PRICING OPTIONS</h2>
                    <hr />
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit.</p>
                </div>

                <div className="container">
                    <div className="sub-cntr">
                        <h4>Basic</h4>
                        <p id="p-sign"><span className="sign">$</span>0</p>
                        <p><span className="free"><i>Free for Life</i></span></p>

                        <div className="specs-container">
                            <ul>
                                <li style={{borderTop: '5px solid #FF8B38'}}>1 GB OF SPACE</li>
                                <li>10 GB OF BANDWIDTH</li>
                                <li>3 WEBSITES</li>
                                <li>BASIC CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>EMAIL SUPPORT</li>
                            </ul>
                        </div>
                    </div>

                    <div id="special" className="sub-cntr">
                        <h4>Professional</h4>
                        <p id="p-sign"><span className="sign">$</span>19</p>
                        <p><span className="free"><i>Monthly Payment</i></span></p>

                        <div id="special-container">
                            <p><span id="most-popular">OUR MOST POPULAR</span></p>
                        </div>

                        <div className="specs-container">
                            <ul>
                                <li>5 GB OF SPACE</li>
                                <li>50 GB OF BANDWIDTH</li>
                                <li>12 WEBSITES</li>
                                <li>ADVANCED CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>EMAIL SUPPORT</li>
                            </ul>
                        </div>
                    </div>

                    <div className="sub-cntr">
                        <h4>Enterprise</h4>
                        <p id="p-sign"><span className="sign">$</span>70</p>
                        <p><span className="free"><i>Monthly Payment</i></span></p>

                        <div className="specs-container">
                            <ul>
                                <li style={{borderTop: '5px solid #FF8B38'}}>UNLIMITED SPACE</li>
                                <li>UNLIMITED BANDWIDTH</li>
                                <li>100 WEBSITES</li>
                                <li>ADVANCED CUSTOMIZATION</li>
                                <li>WORDPRESS INTEGRATION</li>
                                <li>24/7 CUSTOMER SUPPORT</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}