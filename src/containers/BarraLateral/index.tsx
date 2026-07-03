import { useDispatch, useSelector } from 'react-redux'
import FiltroContato from '../../components/FiltroCard'
import { Aside, BotaoVoltar, Campo } from './styles'
import { RootReducer } from '../../store'
import { alterarTermo } from '../../store/reducers/filtro'
import * as enums from '../../utils/enums/Contato'
import BotaoCadastro from '../../components/BotaoCadastro'
import { Link } from 'react-router-dom'

type Props = {
  mostrarFiltro: boolean
}

const BarraLateral = ({ mostrarFiltro }: Props) => {
  const dispatch = useDispatch()
  const { termo } = useSelector((state: RootReducer) => state.filtro)
  const { itens: contatosItens } = useSelector(
    (state: RootReducer) => state.contatos
  )

  const getContadorPorCategoria = (
    categoria: 'Família' | 'Amigos' | 'Trabalho' | 'Todos'
  ) => {
    if (categoria === 'Todos') {
      return contatosItens.length
    } else {
      return contatosItens.filter((item) => item.categoria === categoria).length
    }
  }

  return (
    <>
      <Aside>
        <div>
          {mostrarFiltro ? (
            <>
              <Campo
                type="text"
                placeholder="Buscar"
                value={termo}
                onChange={(e) => dispatch(alterarTermo(e.target.value))}
              />
              <FiltroContato
                criterio={'todos'}
                valor="Todos"
                quantidadeContatos={getContadorPorCategoria('Todos')}
                legenda={'Todos'}
              />
              <FiltroContato
                criterio={'categoria'}
                valor={enums.Categoria.FAMILIA}
                quantidadeContatos={getContadorPorCategoria(
                  enums.Categoria.FAMILIA
                )}
                legenda={'Família'}
              />
              <FiltroContato
                criterio={'categoria'}
                valor={enums.Categoria.AMIGOS}
                quantidadeContatos={getContadorPorCategoria(
                  enums.Categoria.AMIGOS
                )}
                legenda={'Amigos'}
              />
              <FiltroContato
                criterio={'categoria'}
                valor={enums.Categoria.TRABALHO}
                quantidadeContatos={getContadorPorCategoria(
                  enums.Categoria.TRABALHO
                )}
                legenda={'Trabalho'}
              />
              <BotaoCadastro />
            </>
          ) : (
            <Link to="/">
              <BotaoVoltar type="button">Voltar</BotaoVoltar>
            </Link>
          )}
        </div>
      </Aside>
    </>
  )
}

export default BarraLateral
