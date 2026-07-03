import { FormEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { CampoCadastro, MainContainer, Titulo } from '../../styles'
import { ContainerRadio, Form } from './styles'
import * as enums from '../../utils/enums/Contato'

import { cadastrar } from '../../store/reducers/contatos'
import { validaSalvamento } from '../../utils/validacoes/validacoes'
import { BotaoCadastrar } from '../../components/Contato/styles'

const Formulario = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [nome, setNome] = useState('')
  const [telefone, setTelefone] = useState('')
  const [email, setEmail] = useState('')
  const [categoria, setCategoria] = useState(enums.Categoria.FAMILIA)

  const cadastrarContato = (evento: FormEvent) => {
    evento.preventDefault()

    const confirmacao = window.confirm(
      `O Nome: ${nome} e a Categoria: ${categoria} estão corretos? Não será possível edita-los depois.`
    )
    if (!confirmacao) {
      return
    }
    const contatoParaAdicionar = {
      nome,
      categoria,
      telefone,
      email
    }
    if (!validaSalvamento(telefone, email)) {
      return
    }
    console.log(telefone)
    console.log(nome)
    dispatch(cadastrar(contatoParaAdicionar))
    navigate('/')
  }

  return (
    <MainContainer>
      <Titulo>Novo Contato</Titulo>
      <Form onSubmit={cadastrarContato}>
        <CampoCadastro
          value={nome}
          onChange={(evento) => setNome(evento.target.value)}
          type="text"
          placeholder="Nome"
        />
        <CampoCadastro
          value={telefone}
          onChange={(evento) => setTelefone(evento.target.value)}
          type="tel"
          placeholder="Telefone - (DD)XXXXX-XXXX"
        />
        <CampoCadastro
          value={email}
          onChange={(evento) => setEmail(evento.target.value)}
          type="text"
          placeholder="Email - exemplo@email.com.br"
        />
        <ContainerRadio>
          <p>Categoria:</p>
          {Object.values(enums.Categoria)
            .filter((categoria) => categoria !== enums.Categoria.TODOS)
            .map((categoria) => (
              <div key={categoria}>
                <input
                  value={categoria}
                  name="categoria"
                  type="radio"
                  id={categoria}
                  defaultChecked={categoria === enums.Categoria.FAMILIA}
                  onChange={(evento) =>
                    setCategoria(evento.target.value as enums.Categoria)
                  }
                />
                <label htmlFor={categoria}>{categoria}</label>
              </div>
            ))}
        </ContainerRadio>
        <BotaoCadastrar type="submit">Cadastrar</BotaoCadastrar>
      </Form>
    </MainContainer>
  )
}

export default Formulario
