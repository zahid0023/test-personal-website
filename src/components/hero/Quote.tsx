import quoteImage from "../../assets/quote.jpeg"
import "./Quote.css"

export default function Quote() {
    return (
        <div className="grid grid-cols-3 text-white">
            <div className="col-start-1 col-end-4 row-start-1 row-end-2">
                <img src={quoteImage} alt="Quote Image" />
            </div>
            <div className="col-start-1 col-end-3 row-start-1 row-end-2 flex justify-center items-center px-4">
                <p className="great-vibes-regular text-1">
                    "I sometimes find, and I am sure you know the feeling, that I simply have too many thoughts and memories crammed into my mind."
                    <br /> – Albus Dumbledore
                </p>
            </div>
        </div>
    )
}
