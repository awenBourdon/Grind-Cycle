
import styled from "styled-components"
import { mobile } from '../responsive'

const Container = styled.div`
    height: 60vh;
    background-color: lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column ;
    `;
const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
${mobile({fontSize: "10vw"})}
`;
const Desc= styled.p`
font-size: 24px;
font-weight: 300;
${mobile({textAlign: "center"})}

`;
const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
border: 2px solid ;
border-radius: 15px;
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 20px;
`;
const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
background-color: none;

&:focus {
  outline: none;
};
${mobile({width: "80%"})}
`;
const Button = styled.button`
flex:1;
border: none;
background: none;
color: black;
padding-top: 6px;
padding-bottom: 6px;
cursor: pointer;

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Restons en contact !</Desc>
        <InputContainer>
            <Input placeholder="Ton e-mail"/>
            <Button>
                
            </Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter