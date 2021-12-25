import type { NextPage } from "next";
import { useApi } from "../../hooks/useApi";
import { TYPES } from "../../constants"
import { Cast } from "../../types/cast";
import { Error, Loading } from "../../components/index"
import styled from "@emotion/styled";

const CastPage: NextPage = () => {
    const {data, error} = useApi(TYPES[0]);
    if(error) return <Error />
    if(!data) return <Loading />
    return (
      <div>
          <h1>Hello I'm cast!</h1>
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
  
  export default CastPage;
