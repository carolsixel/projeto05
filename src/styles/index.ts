import styled, { createGlobalStyle } from 'styled-components'

const GLobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none
}
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 160px auto;

  @media (max-width: 560px) {
    grid-template-columns: 110px auto;
  }
`
export const MainContainer = styled.main`
  padding: 0 40px;
  height: 95vh;
  overflow-y: scroll;
`
export const ContainerCard = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  gap: 1.25rem;
  width: 100%;

  @media (max-width: 760px) {
    display: block;
  }
`
export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`

export const CampoCadastro = styled.input`
  width: 100%;
  padding: 0.25rem;
  background-color: #fff;
  color: #666666
  border: 0.0625rem solid #666666;
  border-radius: 0.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;

    &::placeholder {
    color: #666666;
  }
`

export default GLobalStyle
