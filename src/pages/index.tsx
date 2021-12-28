import { NextPage } from "next";
import styled from 'styled-components';
import Image from "next/image";
import logo from "../../public/img/logo.png"
import styles from "../../styles/Home.module.css"

const MainPage: NextPage = () => {
    // const root = 'characters';
    return (
        <Container>
            <div className="image">
                <Image src={logo} width={700} height={400}/>
            </div>
            {/* <h1>FUTURAMA CHARACTERS</h1> */}
            <li>
            <a href={"/info"}>
                <p>Info</p>
            </a>
            </li>
            <li>
            <a href={"../characters"}>
                <p>Characters</p>
            </a>
            </li>
            <li>
            <a href={"/cast"}>
                <p>Cast</p>
            </a>
            </li>
            <li>
            <a href={"/episodes"}>
                <p>Episodes</p>
            </a>
            </li>
            <li>
            <a href={"/inventory"}>
                <p>Inventory</p>
            </a>
            </li>
            <li>
            <a href={"/questions"}>
                <p>Questions</p>
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
    Image{
    padding-top: 2rem;
  }
  a {
      color: green;
      font-size: 30px;
      font-weight: 800;
  }
  li {
      list-style: none;
      margin: 30px;
  }
  .image {
      padding-top: 2rem;
  }
`
    

