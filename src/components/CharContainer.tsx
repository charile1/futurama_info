import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import Link from 'next/link';
import { MEDIA_QUERY_END_POINT, TYPES } from "../constants";
import { Characters } from '../types/characters';

export const CharContainer = () => {
  const name = 'characters'
  const {data, error} = useData(TYPES[1]);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <Main>
        <Button href="/">back</Button>
            <Container>
                {data.map((characterData: Characters) => {
                    const {id, images, name} = characterData;
                   
                    return (
                        <Card key={characterData.id}>
                            <Profile src={images.main} alt="" />
                                 <Exp>
                                        <p>NAME: {characterData.name.first} {characterData.name.middle} {characterData.name.last}</p>
                                        <p>GENDER: {characterData.gender}</p>
                                        <p>SPECIES: {characterData.species}</p>
                                        <p>HOME_Planet: {characterData.homePlanet}</p>
                                        {/* <p>OCCUPATION: {characterData.occupation}</p> */}
                                        <p>AGE: {characterData.age}</p>
                                        {/* <p>sayings: {characterData.sayings.map((e) => {
                                            return <li key={e}>{e}</li>})}
                                        </p> */}
                                 </Exp>
                        </Card>
                    )
                })}
            </Container>
        </Main>
  )
}
  const Main = styled.div`
  background-color: red;
  `

const Head = styled.div`
  background-color: red;
  `

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  background-color: red;
`

const Card = styled.div`
  width: 100%;
  max-width: 90%;
  border: 5px solid;
  margin: 10px auto;
  padding: 10px;
  background-color: yellowgreen;
  border-radius: 100px;
  overflow: hidden;
`

const Exp = styled.div`
  margin: 10px auto 10px;
  display: block;
  border: 4px dashed black;
  border-radius: 30px;
  width: 300px;
  background-color: tomato;
  text-align: center;
`

const p = styled.p`
  font-size: 100px;
`

const Profile = styled.img`
  max-width: 20vw;
  height: 400px;
  margin: 0 auto;
  display: block;
`
const Button = styled.a`
  display: inline-block;
  margin: 20px;
  padding: 20px;
  border: 3px solid black;
  background-color: rebeccapurple;
  color: white;
  border-radius: 20px;
`