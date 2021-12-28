import styled from "@emotion/styled";

export const Bottom = () => {
  return (

    <Footer>
      <div>
        <p>Copyright © charile</p>
        <a href="https://sampleapis.com/api-list/futurama"> Click the Futurama API adress.</a>
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
    line-height: 1.2;
  }
`