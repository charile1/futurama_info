import { Error, Loading } from ".";
import { useData } from "../hooks/useData";
import styled from "@emotion/styled";
import Link from 'next/link';
import { MEDIA_QUERY_END_POINT, TYPES } from "../constants";
import { Cast } from '../types/cast';
import { castImage } from "../../src/constants";

export const CastContainer = () => {
    const name = 'cast'
    const {data, error} = useData(TYPES[0]);

    if(error) return <Error />
    if(!data) return <Loading />

    return (
        <Container>
                {data.map((castData: Cast) => {
                    const { name, born, bio, id } = castData;
                    return (
                        <Card key={castData.id}>
                            <CastImg src={castImage[id - 1].url} alt="캐스트 인물" />
                            <Exp>
                                <h4>{castData.name}</h4>
                                <p><span>Birth</span>: {castData.born}</p>
                                <Link href={bio.url}><a>More</a></Link>
                            </Exp>
                        </Card>
                    );
                })}
        </Container>
      )
}

const CastImg = styled.img`
  height: 65%;
  border-radius: 10px;`

const Container = styled.div`
    margin: 80px auto 0;
    /* max-width:1000px; */
    width: 100%;
    padding: 2rem 100px 2rem;
    border: 1px solid black;
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(3, 2fr);
    background-color: red;
    @media (min-width: ${MEDIA_QUERY_END_POINT.MOBILE}) {
        grid-template-columns: 1fr;
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
        grid-template-columns: 1fr 1fr;
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.DESKTOP}) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    h4 {
        font-size: 1.3rem;
        font-weight: 600;
        
    }
    Image {
        border-radius: 50%;
    }
`

const Card = styled.div`
    padding: 20px 0 0;
    border: 5px solid black;
    border-radius: 30px;
    width: 250px;
    height: 450px;
    margin: 0 auto;
    background-color: yellowgreen;
    overflow: hidden;
    text-align: center;
    line-height: 1.8;
    span {
        font-weight: 600;
    }
    a {
        border-bottom: 1px solid;

    }
`

const Exp = styled.div`
    border: 4px dashed black;
    background-color: tomato;
    border-radius: 30px;
    width: 90%;
    display: block;
    padding-bottom: 10px;
    margin: 1rem auto;
`