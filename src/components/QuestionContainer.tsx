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
    <Container>
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
                      <div>
                        <input 
                        type="radio"
                        name={question} 
                        id={questionList} />
                        <label htmlFor={questionList}> {questionList}</label>
                      </div>
                    </>
                  )
                })
                }
              </div>
              <p> Answer is  <span className='ans'>{correctAnswer}</span></p>
              {/* <p className="ans">
                <span>{correctAnswer}</span>
              </p> */}
            </li>
          )
        })}
      </div >
    </Container >
  )
}

const Container = styled.div`
margin: 80px auto 0;
padding: 2rem;
align-items: center;
background-color: red;
li {
  background: yellowgreen;
  list-style: none;
  border: 5px solid ;
  width: 600px;
  border-radius: 20px;
  padding: 1rem;
  margin: 0 auto 10px;
  line-height: 2em;
}
  span{
    font-size: 1.2rem;
    background-color: yellow;
    border-radius: 10px;
  }
  .ans {
    color: yellow;
    padding: 5px;
    :hover {
      cursor: pointer;
      color: black;
      opacity: 1;
    }
  }
`


