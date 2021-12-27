import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
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
                                        <p><span>NAME:</span> {characterData.name.first} {characterData.name.middle} {characterData.name.last}</p>
                                        <p><span>GENDER :</span> {characterData.gender}</p>
                                        <p><span>SPECIES</span>: {characterData.species}</p>
                                        <p><span>HOME_Planet</span>: {characterData.homePlanet}</p>
                                        <p><span>OCCUPATION</span>: {characterData.occupation}</p>
                                        <p><span>AGE</span>: {characterData.age}</p>
                                        {/* <select>
                                       <option>
                                            sayings: {characterData.sayings.map((e) => {
                                              return <li key={e}>{e}</li>})}
                                       </option>
                                        </select> */}
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
  @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
    grid-template-columns: 1fr ;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
    grid-template-columns: 1fr 1fr ;
  }
  @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
    grid-template-columns: repeat(3, 1fr);
  }
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
  span {
    font-weight: 600;
  }
`

const Exp = styled.div`
  margin: 10px auto 10px;
  display: block;
  border: 4px dashed black;
  border-radius: 30px;
  width: 300px;
  background-color: tomato;
  text-align: center;
  line-height: 1.5rem;
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