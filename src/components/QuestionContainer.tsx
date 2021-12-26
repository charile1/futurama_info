import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import { useState } from 'react';
import { Question } from '../types/question';

export const QuestionsContainer = () => {
  const name = 'questions';
  const { data, error } = useData(name);


  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <main>
      <div>
        {data.map((questionsData: Question) => {
          const { question, possibleAnswers, correctAnswer, id } = questionsData;
          return (
            <li key={`futurQ${id}`}>
              <p>
                <span>Q</span>
                <span>{id}. {question}</span>
              </p>
              <div>
                {possibleAnswers.map((questionList: string, index: number) => {
                  return (
                    <>
                      <li>
                        <input type="radio" name={question} id={questionList} />
                        <label htmlFor={questionList}><span>{index + 1}</span> {questionList}</label>
                      </li>
                    </>
                  )
                })
                }
              </div>
              <p className="answer">
                <span>{correctAnswer}</span>
              </p>
            </li>
          )
        })}
      </div >
    </main >
  )
}




