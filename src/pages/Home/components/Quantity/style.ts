import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  gap: 4px;
  padding: 8px;
  
  button{
    display: flex;
    background-color: transparent;
    align-items: center;
  }

  button svg{
    color: ${(props) => props.theme.purple};
    background-color: transparent;
    transition:  all 0.2s;
    &:hover {
        color: ${(props) => props.theme['purple-dark']};
    }
  } 
  span{
    padding-top: 2px;
    color: ${(props) => props.theme['base-title']};
  }
  
`;
