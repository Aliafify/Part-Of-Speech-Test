import React, { useEffect, useState } from "react";
import axios from 'axios';
import Question from "./question";
import Loading from "./loading";
import Options from "./ansOptions";
import ProgressBar from "./progress";
import './word.css'
import Tries from "./tries";

const Words = ({ rank }) => {
    const [questions, setQuestions] = useState(null);
    const [order, setOrder] = useState(0)
    const [correctAns, setCorrectAns] = useState(null);

    useEffect(() => {
        axios.get("/words").then(res => {
            const data = res.data;
            setQuestions(data);

        })
    }, [])
    return (
        <> {!questions ? (<>
            <Loading />
        </>
        ) : (
            <div className="word">
                <div className="top">
                    <h1 className="title">Part Of Speech Test</h1>
                    <Tries rank={rank} />
                    <ProgressBar order={order} />
                    <Question question={questions[order].word} />
                </div>
                <Options setOrder={setOrder} order={order}
                    answer={questions[order].pos}
                    correctAns={correctAns}
                    setCorrectAns={setCorrectAns}
                />
            </div>

        )}
        </>

    )
}

export default Words;