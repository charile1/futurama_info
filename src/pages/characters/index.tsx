import { NextPage } from "next";
import styled from "styled-components"
import Image from "next/image";
import logo from "../../../public/img/logo.png"
import styles from "../../styles/Home.module.css"

const MainPage: NextPage = () => {
    const root = 'characters';
    return (
        <div>
            <div className="image-wrap">
                <Image src={logo} />
            </div>
            <h1>FUTURAMA CHARACTERS</h1>
            <div>
            <a href={root+"/cast"}>
                <p>캐스트</p>
            </a>
            </div>
            <div>
            <a href={root+"/character"}>
                <p>캐릭터</p>
            </a>
            </div>
            <div>
            <a href={root+"/episodes"}>
                <p>에피소드</p>
            </a>
            </div>
            <div>
            <a href={root+"/info"}>
                <p>인포</p>
            </a>
            </div>
            <div>
            <a href={root+"/inventory"}>
                <p>인벤토리</p>
            </a>
            </div>
            <div>
            <a href={root+"/questions"}>
                <p>질문</p>
            </a>
            </div>
        </div>

        
    )
}

export default MainPage;