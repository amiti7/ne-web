import styled from 'styled-components';

export const ProductContainer= styled.div`
height: flex;
margin-bottom:10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background: orange;

@media screen and (max-width: 500px) {
    height: 2500px;

}

@media screen and (max-width: 480px) {
    height: 1400px;
    
}
`;

export const ProductsWrapper= styled.div`
display: grid;
grid-template-columns: 1fr  1fr ;
align-items: center;
grid-gap: 50px;
margin: 0 2em 2em 2em;
padding: 0 50px;
@media screen and (max-width:1000px) {
    grid-template-columns: 1fr 1fr;
}
@media screen and (max-width:1130px) {
    grid-template-columns: 1fr ;
    padding: 0 20px;
}
`;

export const ProductCard= styled.div`
background: #ffe4c4;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
border-radius: 10px;
max-height: 550px;
padding: 30px 0px;
box-shadow: 0 3px 3px black;
transition: all 0.2s ease-in-out;
&:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
}
`;

export const ProductIcon= styled.img`
height: 500px;
width: 400px;
margin-bottom: 10px;
@media screen and (max-width: 770px) {
    height: 25%;
    width: 25%;
    margin:auto
}
`;

export const ProductsH1= styled.h1`
font-size: 2.5rem;
color: black;
margin-bottom: 64px;
@media screen and (max-width: 480px) {
    font-size: 2rem;
}
`;

export const ProductsH2= styled.h1`
font-size: 2rem;
color: black;
margin-bottom: 32px;
@media screen and (max-width: 480px) {
    font-size: 1.5rem;
}
`;




