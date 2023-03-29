import iconOne from "../assets/item-icon-one.webp";
import iconThree from "../assets/item-icon-three.webp";
import iconTwo from "../assets/item-icon-two.webp";
import shortVideo from "../assets/shorter-video.gif";
import faqImage from "../assets/faq-image.webp";
import baloonArrow from "../assets/baloon-arrow.webp";
import lineOne from "../assets/line-one.webp";
import lineTwo from "../assets/line-two.webp";
import mascot from "../assets/mascot.webp";
import topBar from "../assets/top-bar.webp";
import foxLogo from "../assets/fox-logo.webp";
import nbcLogo from "../assets/nbc-logo.webp";
import abcLogo from "../assets/abc-logo.webp";
import marketWatchLogo from "../assets/marketwatch-logo.webp";
import cbsLogo from "../assets/cbs-logo.webp";
import mascottMobile from "../assets/mascott-mobile.svg";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MainPage = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);

    const redirect = useNavigate();

    const handleKey = (event) => {
        if (event.key === "Enter") {
            handleClick();
        }
    }

    const handleClick = async () => {
        try {
            setLoading(true);
        const request = axios.create({
            headers: {
            "x-cors-api-key": "temp_c808fcdca06bf1308503f4574030e882",
            "Content-Type": "application/json",
            "X-Auth-Token": "api-key 3321avhagseem8fntsnnhnbs90xaaea9",
            "X-Requested-With": "application/json"
            }
        });
        const response = await request.post("https://proxy.cors.sh/https://api.getresponse.com/v3/contacts", {
            "email": email,
            "campaign": {
                "campaignId": "qA9mA"
            },
            "dayOfCycle": "0"
        });
        
        if (response.status === 202) {
            console.log(response)
            redirect("/thank-you");
        }
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <main id="root">
            <section id="top">
                <h1>Write Better & Faster Comments with AI</h1>
                <div className="comment">
                    <p>I'll help you write meaningful LinkedIn comments to grow your authority and attract new clients</p>
                    <div className="mascott">
                        <img src={baloonArrow} className="arrow" alt="Baloon arrow" height="42px" width="51px" />
                        <img src={mascot} className="him" alt="Mascott" height="223px" width="202px"/>
                        <img src={mascottMobile} className="him-mobile" alt="Mascott" height="450px" width="348px"/>
                    </div>
                </div>
            </section>
            <div className="lines">
                <img src={lineOne} className="line-one" alt="Stage line" />
                <img src={lineTwo} className="line-two" alt="Stage line" />
            </div>
            <section className="main-container center">
                <div className="left">
                        <img src={topBar} alt="Commenter.ai browser" />
                        <img src={shortVideo} alt="Commenter.ai flow" />
                </div>
                <div className="right">
                    <h2>Join the waiting list and earn a chance to win FREE access</h2>
                    <h3 className="span-sub"><i>Save time. Improve authority. Get clients</i></h3>
                    <p>Comment your email below:</p>
                    <div className="input">
                        <input type="text" placeholder="Comment Your Email" onChange={(event) => setEmail(event.target.value)} onKeyDownCapture={handleKey} />
                        <button className={loading ? "input-button load": "input-button"} onClick={handleClick} type="submit">{loading ? "Loading" : "ADD ME"}</button>
                    </div>
                    <div className="content">
                        <p><i>*Only 100 spots available at platform launch</i></p>
                    </div>
                </div>
            </section>
            <section id="seen">
                <h2>As seen on</h2>
                    <div className="images">
                        <img src={foxLogo} alt="Fox" className="fox" />
                        <img src={nbcLogo} alt="NBC" className="nbc" />
                        <img src={abcLogo} alt="ABC" className="abc" />
                        <img src={marketWatchLogo} alt="Market Watch" className="mw" />
                        <img src={cbsLogo} alt="CBS" className="cbs" />
                    </div>
            </section>
            <section id="features">
                <h2>By using our advanced AI technology, you will be able to:</h2>
                <div className="columns">
                    <div className="item">
                            <div className="item-icon">
                                <div className="item-icon-circle">
                                    <img src={iconOne} alt="Time"/>
                                </div>
                            </div>
                            <div className="item-content">
                                <h4> Generate Comments With Ease And Save Valuable Time</h4>
                                <p>Write comments quickly, freeing up your schedule for other tasks</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-icon">
                                <div className="item-icon-circle">
                                    <img src={iconTwo} alt="Enchance" />
                                </div>
                            </div>
                            <div className="item-content">
                                <h4>Enhance Your Brand And Build A Strong Online Presence</h4>
                                <p>Boost your reach and grow your authority on LinkedIn</p>
                            </div>
                        </div>
                        <div className="item">
                            <div className="item-icon">
                                <div className="item-icon-circle">
                                    <img src={iconThree} alt="Increase" />
                                </div>
                            </div>
                            <div className="item-content">
                                <h4>Increase Your Visibility On LinkedIn And Attract New Clients</h4>
                                <p>Get more views on your posts and easily grow your business</p>
                            </div>
                        </div>
                </div>
            </section>
            <section id="faq">
                <div className="main-container">
                    <div className="left">
                        <h2>Commenting can be profitable</h2>
                        <img src={faqImage} alt="Commenter.ai | Happy customers" />
                    </div>
                    <div className="right">
                        <h2>Commenting can be profitable</h2>
                        <p>Comment your email below:</p>
                        <div className="input">
                            <input type="text" placeholder="Comment Your Email" onChange={(event) => setEmail(event.target.value)} onKeyDownCapture={handleKey}/>
                            <button className={loading ? "input-button load": "input-button"} onClick={handleClick} type="submit">{loading ? "Loading" : "ADD ME"}</button>
                        </div>
                        <div className="content">
                            <p><i>*Only 100 spots available at platform launch</i></p>
                        </div>
                    </div>
            </div>
        </section>
    </main>
    )
}

export default MainPage;