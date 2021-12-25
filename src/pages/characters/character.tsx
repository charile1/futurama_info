import type { NextPage } from "next"; //넥스트페이지
import { useData } from "../../hooks/useData"; //api 가져오기
import { TYPES } from "../../constants"; //타입지정해온거가져오기
import { Characters } from "../../types/characters"; //캐릭터데이터가져오기
import styled from "@emotion/styled"; //스타일컴포넌트
import {Error, Loading} from "../../components/index"; //에러로딩가져오기

const CharacterPage: NextPage = () => {
    const {data, error} = useData(TYPES[1]);

    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {/* 뒤로가기 버튼*/}
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
        </div>
    )
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
    background-color: red;

`

const Card = styled.div`
    width: 100%;
    max-width: 90%;
    border: 5px solid;
    margin: 0 auto;
    padding: 10px;
    background-color: white;
    border-radius: 100px;
    overflow: hidden;
`

const Exp = styled.div`
    display: inline-block;
    // border: 2px solid green;
    border-radius: 10px;
    width: 300px;
`

const p = styled.p`
    font-size: 100px;
`

const Profile = styled.img`
    max-width: 20vw;
    height: 400px;
`

export default CharacterPage;