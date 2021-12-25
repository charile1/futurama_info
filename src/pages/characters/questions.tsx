import type { NextPage } from "next";
import styled from 'styled-components';
import { useData } from "../../hooks/useData";
import { TYPES } from "../../constants";
import  {Question} from "../../types/question";
import {Error, Loading} from "../../components/index"; 

const QuestionPage: NextPage = () => {
    const {data, error} = useData(TYPES[5]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            <h1>QUESTIONS. </h1>
            {data.map((questionData: Question) => {
                return (
                    <div className="question-wrap" key={questionData.id}>
                                <p>{questionData.id}. {questionData.question}</p>
                                <ul>
                                    {questionData.possibleAnswers.map((e) => {
                                        return <li key={questionData.id}>
                                            {e}
                                            </li> 
                                        })}
                                </ul>
                                <p>correctAnswer: {questionData.correctAnswer}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default QuestionPage;

