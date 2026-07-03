import { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as S from './styles'
import { remover, editar } from '../../store/reducers/contatos'
import Contato from '../../models/Contato'
import { validaSalvamento } from '../../utils/validacoes/validacoes'
import { Editando } from './styles'

type Props = Contato

const CardContato = ({ nome, categoria, telefone, email, id }: Props) => {
  const dispatch = useDispatch()

  const [estaEditando, setEstaEditando] = useState(false)
  const [telefoneEditado, setTelefoneEditado] = useState(telefone)
  const [emailEditado, setEmailEditado] = useState(email)

  const clickRemover = () => {
    const confirma = window.confirm('Tem certeza que deseja remover o contato?')
    if (confirma) {
      dispatch(remover(id))
      alert('O contato será removido!')
    } else {
      alert('Operação cancelada.')
    }
  }

  const clickSalvar = () => {
    if (!validaSalvamento(telefoneEditado, emailEditado)) {
      return
    }
    dispatch(
      editar({
        id: id,
        telefone: telefoneEditado,
        email: emailEditado
      })
    )
    setEstaEditando(false)
  }

  return (
    <>
      <S.Card>
        <S.TopCard>
          <S.Nome>
            {nome}
            {estaEditando && <Editando> - Editando...</Editando>}
          </S.Nome>
          <S.Categoria $categoria={categoria}>{categoria}</S.Categoria>
        </S.TopCard>
        <S.DadosEditaveis>
          <li>
            <S.ContatoInfos
              value={telefoneEditado}
              onChange={(e) => setTelefoneEditado(e.target.value)}
              disabled={!estaEditando}
              placeholder="telefone"
            />
          </li>
          <li>
            <S.ContatoInfos
              value={emailEditado}
              onChange={(e) => setEmailEditado(e.target.value)}
              disabled={!estaEditando}
              placeholder="e-mail"
            />
          </li>
        </S.DadosEditaveis>
        <S.BarraAcoes>
          {estaEditando ? (
            <>
              <S.BotaoSalvar onClick={clickSalvar}>Salvar</S.BotaoSalvar>
              <S.BotaoDireito onClick={() => setEstaEditando(false)}>
                Cancelar
              </S.BotaoDireito>
            </>
          ) : (
            <>
              <S.BotaoEsquerdo onClick={() => setEstaEditando(true)}>
                Editar
              </S.BotaoEsquerdo>
              <S.BotaoDireito onClick={clickRemover}>Remover</S.BotaoDireito>
            </>
          )}
        </S.BarraAcoes>
      </S.Card>
    </>
  )
}

export default CardContato
