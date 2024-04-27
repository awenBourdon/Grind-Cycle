import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #ff0000;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 700;
    @media (max-width:375px){
      font-size: 10px
    }

`;

const Annoucement = () => {
  return (
    <Container>
        FRAIS DE PORT OFFERTS À PARTIR DE 150€ D'ACHATS
    </Container>
  )
}

export default Annoucement