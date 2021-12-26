import { Error, Loading } from ".";
import { useData } from "../hooks/useData";
import styled from "@emotion/styled";
import Link from 'next/link';
import { MEDIA_QUERY_END_POINT, TYPES } from "../constants";
import { Cast } from '../types/cast';

export const CastContainer = () => {
    const name = 'cast'
    const {data, error} = useData(TYPES[0]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
        <div>
            <h1>This is Cast Page!!!</h1>
            {data.map((castData: Cast) => {
                return (
                    <div key = {castData.id}>
                        <p>name: {castData.name}</p>
                        <p>born: {castData.born}</p>
                        <p>bio: {castData.bio.url}</p>
                  </div>
                )
            })}   
        </div>
      )
}