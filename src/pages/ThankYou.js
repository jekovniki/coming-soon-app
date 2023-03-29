import pull from "../assets/pull.webp";
import baloonArrow from "../assets/baloon-arrow.webp";
import mascott from "../assets/mascott-speeding.webp";

const ThankYouPage = () => {

    return (
        <main className="thanks">
            <div className="content">
                <h1>Thank you very much!</h1>
                <h3>You have been added to our list</h3>
                <img src={pull} alt="Thank you | Commenter.ai" />
                <h4>Do you want a free 3-month subscription to the Commenter.ai platform?</h4>
                <p className="bottom-text">Go to the link to find out how you can get it - <a href="https://raffle.commenter.ai/">Click here</a></p>
                <img src={baloonArrow} className="baloon-arrow" alt="Commenter.ai" />
                <img src={mascott} className="mascott" alt="Mascott | Commenter.ai" />
            </div>
        </main>
    )
}

export default ThankYouPage;