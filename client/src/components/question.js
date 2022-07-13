import React from "react";
import "./question.css"
const Question = ({ question }) => {
    return (
        <>
            <div className="q-cont">
                <p className="q-text">
                    Choose type of this Words:
                    <b> {question}</b>
                </p>
            </div>
        </>
    )
}
export default Question;