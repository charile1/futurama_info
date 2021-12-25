import type { NextPage } from "next";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import { Episodes } from "../../types/episodes";
import {Error, Loading} from "../../components/index"
import styled from "styled-components";

const EpisodesPage: NextPage = () => {
    const {data, error} = useApi(TYPES[2]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {data.map((episodeData: Episodes) => {
                return (
                    <div key={episodeData.id}>
                        <ul>
                            <li>title: {episodeData.title}</li>
                            <li>writers: {episodeData.writers}</li>
                            <li>original air date: {episodeData.originalAirDate}</li>
                            <li>description: {episodeData.desc}</li>
                        </ul>
                    </div>
                )
            })}
        </div>
    )
}

export default EpisodesPage;