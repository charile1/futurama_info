import styled from "@emotion/styled";

export const Bottom = () => {
  return (

    <Footer>
      <div>
        <a href="https://sampleapis.com/api-list/futurama"> Futurama API adress</a>
      </div>
    </Footer>

  )
}

const Footer = styled.footer`
  background: green;
  div{
    color: yellowgreen;
    padding: 1em 0;
    text-align:center;
  }
`