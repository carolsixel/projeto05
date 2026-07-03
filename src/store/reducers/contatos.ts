import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Contato from '../../models/Contato'
import * as enums from '../../utils/enums/Contato'

type ContatosState = {
  itens: Contato[]
}

const initialState: ContatosState = {
  itens: [
    {
      nome: 'Rebecca Nogueira',
      categoria: enums.Categoria.AMIGOS,
      telefone: '(21)96962-5522',
      email: 'becca@gmail.com',
      id: 1
    },
    {
      nome: 'Fernando Cunha',
      categoria: enums.Categoria.FAMILIA,
      telefone: '(21)99269-5566',
      email: 'nando@gmail.com',
      id: 2
    },
    {
      nome: 'Luca Sixel',
      categoria: enums.Categoria.TRABALHO,
      telefone: '(21)99397-7894',
      email: 'luca@gmail.com',
      id: 3
    }
  ]
}

const contatosSlice = createSlice({
  name: 'contatos',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter(
        (contato) => contato.id !== action.payload
      )
    },
    editar: (
      state,
      action: PayloadAction<{
        id: number
        telefone: string
        email: string
      }>
    ) => {
      const indexDoContato = state.itens.findIndex(
        (c) => c.id === action.payload.id
      )
      if (indexDoContato >= 0)
        state.itens[indexDoContato] = {
          ...state.itens[indexDoContato],
          telefone: action.payload.telefone,
          email: action.payload.email
        }
    },
    cadastrar: (state, action: PayloadAction<Omit<Contato, 'id'>>) => {
      const contatoJaExiste = state.itens.find(
        (contato) =>
          contato.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )

      if (contatoJaExiste) {
        alert(
          'Já existe um contato cadastrado com este nome, insira sobrenome!'
        )
      } else {
        const ultimoId =
          state.itens.length > 0 ? Math.max(...state.itens.map((c) => c.id)) : 0
        const novoId = ultimoId + 1

        const novoContato = {
          ...action.payload,
          id: novoId
        }
        state.itens.push(novoContato as Contato)
      }
    }
  }
})

export const { remover, editar, cadastrar } = contatosSlice.actions

export default contatosSlice.reducer
