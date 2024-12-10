import styled from 'styled-components'
import { fonts } from '../../../../styles/fonts'





export const ConffeeCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme['base-card']};
  
  /* gap: 0.2rem; */
  align-items: center;  
  text-align: center;
  
  border: 1px solid #ddd;
  border-top-right-radius: 16px;
  border-bottom-left-radius: 16px;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
  padding: 0 20px 20px;
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
  
} 

   h3{
    margin-top: 8px;
    font-family: ${fonts.titleS};
   
    color: ${(props) => props.theme['base-subtitle']};
}

span{
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

export const Tag = styled.div`
      display: flex;
      align-items: center;
      align-self: center;
      gap: 4px;

  span{
    padding: 4px 8px;
    background-color: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    font-family: ${fonts.tag};
    font-size: 10px;
    border-radius: 8px;
    text-transform: uppercase;

  }
`

export const PriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: space-between;

`
export const Value = styled.div`
display: flex;
align-items: center;
gap: 3px;
span:first-child{
  ${fonts.textS}
  color: ${(props) => props.theme['base-text']}
}

span:last-child{
  ${fonts.titleM}
  color: ${(props) => props.theme['base-text']}
}
`


export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme['yellow-dark']: theme['purple-dark']};
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.yellow : theme.purple};
    }
  }
`

