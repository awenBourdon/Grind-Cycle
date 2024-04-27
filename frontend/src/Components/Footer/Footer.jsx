
import styled from "styled-components"
import { mobile } from '../../responsive'

const Container = styled.div`
    display: flex;
    background-color: #272727;
    color: white;
    ${mobile({flexDirection: "column"})};
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
`;
const Logo = styled.h1`
    flex: 1;
    font-family: "Unbounded";
    font-weight :500;
`;

const Desc = styled.p`
    margin: 20px 0px;
    
`;
const SocialContainer = styled.div`
   display: flex;
`;
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    color: white;
    background-color: #${props=>props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
`;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({display: "none"})};
    
`;

const Title = styled.h3`
    margin-bottom: 30px;
`;

const List = styled.ul`
        margin: 0;
        padding: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap; 
`;

const ListItem = styled.li`
        width: 50%;
        margin-bottom: 10px;
        cursor: pointer;
        font-weight: 200;
        &:hover {
            text-decoration: underline;
        }
`;

const Right = styled.div`
    flex: 1;
    padding: 20px;
`;

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`;

// const Payment = styled.img`
//     width: 50%;
// `;


const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>GRIND CYCLE</Logo>
            <Desc>Découvrez une sélection pointue de planches, d'accessoires et de vêtements, tout en vous imprégnant de l'atmosphère décontractée et passionnée qui règne dans notre magasin. Rejoignez une communauté de skateurs passionnés et vivez pleinement votre passion pour le skateboard avec nous !</Desc>
            <SocialContainer>
                <SocialIcon  color="111111">
                     
                </SocialIcon>
                <SocialIcon  color="111111">
                      
                </SocialIcon>
                <SocialIcon  color="111111">
                    
                </SocialIcon>
                <SocialIcon color="111111">
                    
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center>

            <Title>Plan du site</Title>
            <List>
                <ListItem>Accueil</ListItem>
                <ListItem>Panier</ListItem>
                <ListItem>Cruiser</ListItem>
                <ListItem>Skate</ListItem>
                <ListItem>Shoes</ListItem>
                <ListItem>Mon compte</ListItem>
                <ListItem>Suivre ma commande</ListItem>
                <ListItem>Ma wishlist</ListItem>
                <ListItem>Conditions générales</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
                <ContactItem>17 rue Bruneau, 37912 Gilbertville</ContactItem>
                <ContactItem>07 63 72 56 22</ContactItem>
                <ContactItem>grind.cycle@gmail.com</ContactItem>
                {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
    </Container>
  )
}

export default Footer