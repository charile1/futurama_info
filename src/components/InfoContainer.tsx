import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import { Info } from '../types/info';
import Link from 'next/link';
import Image from "next/image";
import philip from "../../public/img/philip.png"

export const InfoContainer = () => {
  const name = 'info'
  const { data, error } = useData(name);
  console.log(data);
  if (error) return <Error />
  if (!data) return <Loading />

  return (
    <Container>
      <Ul>
        {data.map((infoData: Info) => {
          const { synopsis, yearsAired, creators, id } = infoData;
          return (
            <li key={`info${id}`}>
              <Image src={philip} width={400} height={400} />
                <dl>
                  <div>
                    <dd>{synopsis}</dd>
                  </div>
                  <div>
                    <dt><span>YEARSAIRED</span></dt>
                    <dd>{yearsAired}</dd>
                  </div>
                  <div>
                    <dt><span>CREATORS</span></dt>
                    <dd>
                      <Link href={creators[0].url}> 
                        <a>{creators[0].name}</a>
                      </Link>
                      </dd>
                  </div>
                </dl>
            </li>
          )
        })}
      </Ul>
    </Container>
  )
}

const Container = styled.div`
background-color: yellowgreen;
border: 1px solid;
text-align: center;
padding-top: 30px;
`

const Ul = styled.ul`
background-color: yellowgreen;
  li{
    max-width:1000px; 
    margin:80px auto ;
    dl{
        padding-top: 20px;
        span {
          font-weight: 600;
        }
        div {
          padding-bottom: 1rem;
        }
        div:first-child{
          margin-bottom: 2rem;
          dd{
            columns: 20em;
            column-gap:5rem;
            text-align:justify;
            letter-spacing: -0.3px;
          }
        }
      }
    }
`