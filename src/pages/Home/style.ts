import styled from 'styled-components'
import { fonts } from '../../styles/fonts'

export const HomeContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
align-content: center;
text-align: center;


margin-top: 10rem;
`

export const ConffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  align-items: center;
  background-color: ${(props) => props.theme['base-card']};
  border: 1px solid #ddd;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 16rem;
  height: 19.375rem;
  transition: box-shadow 0.3s, transform 0.3s;
  &:hover {
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.4);
    transform: translateY(-15px);
  }

img{
    display: flex;
   // position: absolute;
   transform: translateY(-35px);
    top: -15px;
    width: 120px;
    height: 120px;
    align-items: center;
 justify-content: center;
 align-items: center;
 text-align: center;
  ;
}

div{
    display: flex;
    gap: 0.5rem;
    

}

span{
    padding: 0.2rem;
    background-color: ${(props) => props.theme.yellow};
    color: ${(props) => props.theme['yellow-dark']};
    font-family: ${fonts.tag};
    font-size: 10px;
    border-radius: 8px;
}
strong{
    font-family: ${fonts.titleS};
    font-size: 14px;
    color: ${(props) => props.theme['base-subtitle']};
}

p{
    font-family: ${fonts.textS};
    font-size: 10px;  
    color: ${(props) => props.theme['base-label']};
}

svg{
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme['base-card']};
    border-radius: 5px;
    padding: 0.125rem;
    border: none;
    margin: 0;
    
}
`


export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
  border-radius: 4px;
  box-shadow: none;
  border: none;
  
  background: ${(props) => props.theme['base-button']};
`;

export const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 12px;
  padding: 4px;
  color: ${(props) => props.theme.purple};
`;

export const Counter = styled.div`
  font-size: 14px;

`;

