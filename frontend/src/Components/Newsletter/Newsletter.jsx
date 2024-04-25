import styled from "styled-components"

const Container = styled.div`
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column ;
    @media(max-width: 800px)
  {
  };
    `;

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
@media only screen and (max-width: 768px){
font-size: 10vw};
`;

const Desc= styled.p`
font-size: 24px;
font-weight: 500;
@media only screen and (max-width: 768px){
    text-align: "center"};

`;

const InputContainer = styled.div`
width: 50%;
height: 60px;
background-color: white;
border: 2px solid ;
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
@media only screen and (max-width: 768px){
    width: 80%
  };
`;

const Button = styled.button`
width: 40%;
height: 100%;
border: none;
font-weight: 500;
background: #da14ff;
color: #111111;
font-family: "Unbounded", sans-serif; 
font-size: 20px;
cursor: pointer;
@media (max-width:800px){
  font-size:14px;
};
@media (max-width:500px){
  font-size:10px;
}

`;

const Newsletter = () => {
  return (
    <Container>
        <Title>NEWSLETTER</Title>
        <Desc>RESTONS EN CONTACT !</Desc>
        <InputContainer>
            <Input placeholder="TON E-MAIL"/>
            <Button>S'INSCRIRE</Button>
        </InputContainer>
    </Container>
  )
}

export default Newsletter