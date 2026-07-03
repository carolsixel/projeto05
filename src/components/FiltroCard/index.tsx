import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { alterarFiltro } from '../../store/reducers/filtro'
import { RootReducer } from '../../store'

export type Props = {
  legenda: string
  valor: 'Família' | 'Amigos' | 'Trabalho' | 'Todos'
  criterio: 'categoria' | 'todos'
  quantidadeContatos: number
}

const FiltroContato = ({
  quantidadeContatos,
  legenda,
  criterio,
  valor
}: Props) => {
  const dispatch = useDispatch()
  const filtro = useSelector((state: RootReducer) => state.filtro)

  const verificaEstaAtivo = () => {
    const mesmoValor = filtro.valor === valor
    const mesmoCriterio = filtro.criterio === criterio

    return mesmoCriterio && mesmoValor
  }

  const ativo = verificaEstaAtivo()

  const filtrar = () => {
    dispatch(
      alterarFiltro({
        criterio: criterio,
        valor: valor
      })
    )
  }
  return (
    <S.Card $ativo={ativo} onClick={filtrar}>
      <S.Contador>{quantidadeContatos}</S.Contador>
      <S.Label>{legenda}</S.Label>
    </S.Card>
  )
}

export default FiltroContato
