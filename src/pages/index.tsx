import { NextPage } from "next";
import styled from 'styled-components';
import Image from "next/image";
import logo from "../../public/img/logo.png"
import styles from "../../styles/Home.module.css"

const MainPage: NextPage = () => {
    const root = 'characters';
    return (
        <Container>
            <div className="image-wrap">
                <Image src={logo} />
            </div>
            <h1>FUTURAMA CHARACTERS</h1>
            <div>
            <a href={root+"/cast"}>
                <p>CAST</p>
            </a>
            </div>
            <div>
            <a href={root+"/character"}>
                <p>CHARACTER</p>
            </a>
            </div>
            <div>
            <a href={root+"/episodes"}>
                <p>EPISODE</p>
            </a>
            </div>
            <div>
            <a href={root+"/info"}>
                <p>INFO</p>
            </a>
            </div>
            <div>
            <a href={root+"/inventory"}>
                <p>INVENTORY</p>
            </a>
            </div>
            <div>
            <a href={root+"/questions"}>
                <p>QUIZ</p>
            </a>
            </div>
        </Container>

        
    )
}

export default MainPage;

const Container = styled.div`
    background-color: wheat;
    border: 1px solid red;
    text-align: center;
    img{
    display: block;
    /* width: 10px; */
    /* max-width:100%; */
  }
  a {
      color: rebeccapurple;
      /* border: 2px solid black; */
      font-size: 30px;
      font-weight: 600;
  }
`