import styled from 'styled-components'
import variaveis from '../../styles/variaveis'

export const Aside = styled.aside`
  background-color: #e1e1e1;
  height: 100vh;
  padding: 1rem;
`

export const Campo = styled.input`
  width: 100%;
  padding: 0.25rem;
  background-color: #fff;
  color: #666666
  border: 0.0625rem solid #666666;
  border-radius: 0.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`
export const BotaoVoltar = styled.button`
  width: 100%;
  font-weight: bold;
  font-size: 0.75rem;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 0.5rem;
`
