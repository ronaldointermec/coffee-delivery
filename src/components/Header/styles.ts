import styled from "styled-components";
import { fonts } from '../../styles/fonts'

export const HeaderContainer = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
div{
    display:flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
   
}
`

export const EstadoContainer = styled.div`
display: flex;
align-items: center;
gap: 0.5rem;

background-color: ${(props) => props.theme["purple-light"]};
padding: 0.875rem;
border-radius: 6px;
span{
    color: ${(props) => props.theme["purple-dark"]};
    font-family: ${fonts.textS};
    font-size: 12px;
    white-space: nowrap;
}

svg{
    color: ${(props) => props.theme.purple};
 
    padding: 0;
    border: none;
    margin: 0;
}
`

export const CartContainer = styled.div`
  position: relative;
  display: inline-block;

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 3.125rem; /* Ajustar conforme necessário */
    height: 3.125rem;
    background-color: ${(props) => props.theme["yellow-light"]}; /* Cor de fundo do container */
    border-radius: 6px; /* Cantos arredondados */
    text-decoration: none;
  }

  svg {
    color:  ${(props) => props.theme["yellow-dark"]}; /* Cor do ícone do carrinho */
  }

  span {
    position: absolute;
    top: -5px;
    right: -5px;
    background-color:${(props) => props.theme["yellow-dark"]}; /* Cor do badge */
    color: ${(props) => props.theme.background}; /* Cor do texto do badge */
    font-family: ${fonts.textS};
    font-size: 12px;
    font-weight: bold;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;