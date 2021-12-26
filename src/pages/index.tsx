import { NextPage } from "next";
import styled from 'styled-components';
import Image from "next/image";
import logo from "../../public/img/logo.png"
import styles from "../../styles/Home.module.css"

const MainPage: NextPage = () => {
    // const root = 'characters';
    return (
        <Container>
            <div className="image-wrap">
                <Image src={logo} />
            </div>
            {/* <h1>FUTURAMA CHARACTERS</h1> */}
            <li>
            <a href={"/info"}>
                <p>INFO</p>
            </a>
            </li>
            <li>
            <a href={"../characters"}>
                <p>CHARACTER</p>
            </a>
            </li>
            <li>
            <a href={"/cast"}>
                <p>CAST</p>
            </a>
            </li>
            <li>
            <a href={"/episodes"}>
                <p>EPISODE</p>
            </a>
            </li>
            <li>
            <a href={"/questions"}>
                <p>QUIZ</p>
            </a>
            </li>
            <li>
            <a href={"/inventory"}>
                <p>INVENTORY</p>
            </a>
            </li>
        </Container>        
    )
}

export default MainPage;

const Container = styled.div`
    margin-top: 80px;
    background-color: yellowgreen;
    border: 1px solid black;
    text-align: center;
    img{
    /* display: block; */
    /* width: 10px; */
    /* max-width:100%; */
  }
  a {
      color: rebeccapurple;
      font-size: 30px;
      font-weight: 700;
  }
  li {
      list-style: none;
      margin: 30px;
  }
`
    
