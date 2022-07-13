import React from "react";
import { useNavigate } from "react-router-dom";
import "./rank.css"
const Rank = ({ rank }) => {
    const Navigat = useNavigate();
    // Try Test again callback
    const tryAgain = () => {
        Navigat('/');
    }

    return (

        <div className="word rank">

            {rank.length ? rank.map((r, index) =>

                <h3 key={index} className="rank-text">Try({index + 1}) Rank: {r} %</h3>
            ) : null}

            <input className="btn" type="button" value="try again" onClick={() => { tryAgain() }} />
        </div>

    )
}
export default Rank;