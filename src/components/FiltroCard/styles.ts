import styled from 'styled-components'

type Props = {
  $ativo: boolean
}

export const Card = styled.div<Props>`
  padding: 0.5rem;
  border: ${(props) =>
    props.$ativo ? '0.150rem solid #1E90FF' : '0.150rem solid #383737'};
  background-color: #fcfcfcfc;
  color: #4e4e4e;
  margin: 1rem 0;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
`
export const Contador = styled.span`
  font-weight: bold;
  font-size: 1.5rem;
  display: block;
`

export const Label = styled.span`
  font-size: 0.875rem;
`
