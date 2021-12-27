import Link from "next/link";
import styled from "@emotion/styled";
import { MEDIA_QUERY_END_POINT } from "../../constants";

export const Navigation = () => {
  return (
    <Header>
      <div>
        <h1><Link href="/">
          <a>futurama</a>
        </Link></h1>
        <nav>
          <ul>
            <li>
              <Link href="info">
                <a>Info</a>
              </Link>
            </li>
            <li>
              <Link href="characters">
                <a>Characters</a>
              </Link>
            </li>
            <li>
              <Link href="cast">
                <a>Cast</a>
              </Link>
            </li>

            <li>
              <Link href="episodes">
                <a>Episodes</a>
              </Link>
            </li>
            <li>
              <Link href="inventory">
                <a>Inventory</a>
              </Link>
            </li>
            <li>
              <Link href="questions">
                <a>Questions</a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </Header>
  )
}

const Header = styled.header`
  width: 100%;
  position: fixed;
  background: red;
  color: white;
  top: 0;
  overflow: hidden;
  z-index: 10;
  box-shadow:0 5px 10px rgba(0,0,0,0.5);

  div{
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    max-width:1280px; margin:0 auto;
    padding: 0.8em 0;
  }
  
  h1{ 
    text-transform: uppercase;
    a{ 
      font-size:2.4rem; color: yellowgreen;
    }
  }
  
  a{
    display:block;
    padding:0.5rem 2rem;
    font-weight:bold;
    font-size:1.6rem;
  }

  ul{
    display:grid;
    grid-template-columns: repeat(3,1fr);
    text-align:center; 
    gap:0.8rem; 
    margin:1rem auto 0;
  }

  @media (min-width: ${MEDIA_QUERY_END_POINT.TABLET}) {
      div{
        flex-direction:row;
        ul{
          grid-template-columns: repeat(6,1fr);
          /* gap:0; */
          margin:0 0 0 0;
        }
      }
    }
`