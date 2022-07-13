import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import "./ansOptions.css"
import Context from "./Context";

const Options = ({ setOrder, order, answer, correctAns, setCorrectAns }) => {

    const options = ['noun', 'verb', 'adverb', 'adjective']; // Options of answer...
    const [choice, setChoice] = useState(null);
    const [disable, setDisable] = useState(false);
    const [submitDisabe, setSubmitDisable] = useState(true);
    const Navigat = useNavigate();
    const { getRank } = useContext(Context);
    const [Getrank] = getRank

    // enable submition after choose answer
    const onChecked = (e) => {
        setChoice(e.value);
        setSubmitDisable(false);
    }
    // continue to next question
    const next = async () => {
        if (order < 9) {

            setOrder(order + 1);
            document.querySelector(`.${choice}`).innerHTML = ""
            setDisable(false);
            setSubmitDisable(true);
            setChoice(null)
        } else {
            const score = await correctAns / 10 * 100;
            await Getrank(score)
            Navigat('/rank');
        }

    }
    // submit question answer
    const submitAnswer = () => {
        if (answer === choice) {
            setCorrectAns(correctAns + 1);
            document.querySelector(`.${choice}`).innerHTML = "true"
            setDisable(true);
            setSubmitDisable(true);

        } else {
            document.querySelector(`.${choice}`).innerHTML = "false";
            setDisable(true);
            setSubmitDisable(true);

        }
    }
    return (
        <div className="bottom">
            <ul className="ans">
                {options.map(o => <li key={o} ><input type="button" id={o}
                    value={o} onClick={event => onChecked(event.target)} disabled={disable} />
                    <br /> <span className={o}></span></li>
                )}
            </ul>

            <div className="bottom-btn">
                <input className="btn" type='button' value='Submit' onClick={() => submitAnswer()} disabled={submitDisabe} />
                <input className="btn" type='button' value='Next' onClick={() => next()} disabled={!disable} />
            </div>
        </div>
    )
}
export default Options;