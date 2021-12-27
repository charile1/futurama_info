import { Error, Loading } from '.';
import { useData } from '../hooks/useData';
import styled from '@emotion/styled';
import { MEDIA_QUERY_END_POINT } from "../constants";
import { Inventory } from '../types/inventory';


export const InventoryContainer = () => {
  const name = 'inventory';
  const { data, error } = useData(name);

  if (error) return <Error />
  if (!data) return <Loading />

  return (
      <Container>
        <h2>{name}</h2>
        <Ul>
          {data.map((inventoryData: Inventory) => {
            const { title, category, description, slogan, price, stock, id } = inventoryData;
            return (
              <li key={`futurama-cast-${id}`}>
                <Category>{category}</Category>
                <h3>{title}</h3>
                <Slogan>{slogan}</Slogan>
                <p>{description}</p>
                <dl>
                  <div>
                    <dt>price</dt>
                    <dd>{price} </dd>
                  </div>
                  <div>
                    <dt>stock</dt>
                    <dd>{stock} </dd>
                  </div>
                </dl>
              </li>
            )
          })}
        </Ul>
      </Container >
    )
  }
  const Container = styled.div`
  background-color: red;
  padding-bottom: 2rem;
  margin: 80px auto 0;
    h2 {
      color: white;
      font-size: 2rem;
      text-align: center;
      font-weight: 600;
      padding: 2rem;
    }
    `
  const Category = styled.p`
  display:inline-block; 
  border-bottom: 1px solid;
  padding-top: 1rem;
  padding-bottom: 2px;
  `

  const Ul = styled.ul`
    max-width:1000px; 
    margin:0 auto;
    display: grid;
    gap : 2rem;
    h3{
      margin-bottom: 1rem;
      font-weight: 600;
      padding-top: 1rem ;
      font-size: 1.5rem;
    }
    @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
      grid-template-columns: repeat(2, calc((100% - 2rem) / 2));
    }
    li{
      display: flex;
      flex-direction: column;
      align-items: center;
      border: 5px solid black;
      border-radius: 20px;
      background-color: yellowgreen;
      text-align:center;
    }
    dl{
      padding: 10px;
      margin: 1rem auto;
      width: 40%;
      border: 1px dashed;
      background-color: yellow;
      border-radius: 20px;
      display:flex; 
      justify-content:center; 
      gap: 1.5em;
      line-height: 1.2;

    }
  `
  const Slogan = styled.p`
  font-weight:bold;
    color: red;
    font-size: 18px;
  `
