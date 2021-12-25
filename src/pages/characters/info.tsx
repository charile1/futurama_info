import type { NextPage } from "next";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants";
import {Error, Loading} from "../../components/index"
import { Info } from "../../types/info";

const InfoPage: NextPage = () => {
    const {data, error} = useApi(TYPES[3]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            {data.map((infoData: Info) => {
                return (
                    <div key={infoData.id}>
                        <p>{infoData.synopsis}</p>
                        <p>years-aired:{infoData.yearsAired}</p>
                        {infoData.creators.map((e) => {
                            return <p key={e.name}>name: {e.name}</p>
                        })}
                </div>
                )
            })}
        </div>
    )
}

export default InfoPage;