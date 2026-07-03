import styled from 'styled-components'
import variaveis from '../../styles/variaveis'
import * as enums from '../../utils/enums/Contato'

type CategoriaProps = {
  $categoria: enums.Categoria
}

function RetornaCorCategoria(props: CategoriaProps): string {
  if ('$categoria' in props) {
    if (props.$categoria === enums.Categoria.TODOS) return variaveis.cinza
    if (props.$categoria === enums.Categoria.FAMILIA) return variaveis.verde
    if (props.$categoria === enums.Categoria.AMIGOS) return variaveis.azul
    if (props.$categoria === enums.Categoria.TRABALHO)
      return variaveis.vermelhoClaro
  }
  return variaveis.cinza
}

export const Card = styled.div`
  backgorund-color: ${variaveis.cinzaClaro};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 1rem;
  margin-bottom: 2rem;
  border-radius: 1rem;
  width: 100%;
`
export const TopCard = styled.div`
  display: flex;
  align-itens: center;
  justify-content: space-between;

  @media (max-width: 560px) {
    display: block;
    padding-bottom: 10px;
  }
`
export const Nome = styled.h3`
  font-size: 1.125rem;
  font-weight: bold;
  margin: 0 0.5rem 0 0.5rem;
`
export const Categoria = styled.span<CategoriaProps>`
  padding: 0.25rem 0.5rem;
  font-size: 0.8rem;
  font-weight: bold;
  margin: 0.2rem 2rem 0 0.5rem;
  border-radius: 0.5rem;
  color: ${(props) => RetornaCorCategoria(props)};
  background-color: ${variaveis.cinza};
`
export const DadosEditaveis = styled.ul`
  margin-bottom: 0.5rem;
`
export const ContatoInfos = styled.input`
  height: 1rem;
  width: 15rem;
  margin-left: 0.5rem;
  border: none;
  background-color: #fff;
  cursor: pointer;
`
export const BarraAcoes = styled.div`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`
export const BotaoEsquerdo = styled.button`
  font-weight: bold;
  font-size: 0.75rem;
  color: #fff;
  padding: 0.5rem 0.75rem;
  border: none;
  cursor: pointer;
  background-color: ${variaveis.cinza};
  border-radius: 0.5rem;
`
export const BotaoDireito = styled(BotaoEsquerdo)`
  border-radius: 0.5rem;
  margin-left: 0.05rem;
  color: ${variaveis.vermelho};
`
export const BotaoSalvar = styled(BotaoEsquerdo)`
  color: ${variaveis.verde};
`
export const BotaoCadastrar = styled(BotaoSalvar)`
  border-radius: 0.5rem;
`
export const Editando = styled.em`
  font-weight: bold;
  font-size: 1rem;
`
