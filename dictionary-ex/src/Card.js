import React from "react";
import "./Card.css"

const Card = (props) => {

    return (
        <>
            <div id="cardItem">
                <h2 className="word">word</h2>
                <button className="checkbtn">check</button>
                <a href="#">edit</a>
                <button className="delbtn">❌</button><br/>
                <span className="pronunciation">[pronunciation]</span>
                <div className="meaning">meaning</div>
                <div className="examples">examples</div>
                <div className="exMeaning">exMeaning</div>
            </div>
        </>
    )
}

export default Card;