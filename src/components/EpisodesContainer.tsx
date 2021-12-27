import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import { Episodes } from '../types/episodes';

export const EpisodesContainer = () => {
  const name = 'episodes';
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
      <div>
        <Container>
          {data.map((episode: Episodes) => {
            const  {number, title, writers, originalAirDate, desc, id } = episode;

            return (
              <Card key={`episode-${id}`}> 
              {/* <div>EP.{number}</div> */}
                  <ul>
                  <li><Item>Episode #{number}</Item></li>
                  <Title>{title}</Title>
                  <li><Item>Aired Date : </Item> {originalAirDate}</li>
                  <li><Item>Writters : </Item> {writers}</li>
                  <li><Desc><Item>Story :</Item> {desc}</Desc></li>
                  </ul>
              </Card>
            )
          })
        }
        </Container>
      </div>
  )
}
const Container = styled.div`
margin: 80px auto;
padding-top: 2rem;
padding: 100px;
background-color: tomato;
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: center;
justify-content: center;
text-align: center;

`

const Card = styled.div`
text-align: center;
border: 4px solid black;
border-radius: 50%;
width: 400px;
height: 400px;
margin: 0 auto;

margin-bottom: 30px;
background-color: yellowgreen;
display: flex;
justify-content: center;
padding-top: 300px;
align-items: center;
overflow: hidden;
transition: 0.7s;
li {
  opacity: 0;
}

:hover {
  padding-top: 0px;
  overflow: hidden;
  width: 550px;
  height: 550px;
  background: yellow;
  li {
    display: visible;
    opacity: 1;
  }

}


overflow: hidden;
ul {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 2rem;
  font-size: 18px;
}
`

const Title = styled.div`
font-size: 2rem;
font-weight: 600;
margin-bottom: 2rem;
`
const Item = styled.div`
display: inline-block;
font-weight: 600;
font-size: 1.2rem;
`

const Desc = styled.div`
`

