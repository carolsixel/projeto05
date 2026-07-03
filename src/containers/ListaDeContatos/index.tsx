import { useSelector } from 'react-redux'
import CardContato from '../../components/Contato'
import { ContainerCard, MainContainer, Titulo } from '../../styles'
import { RootReducer } from '../../store'
import * as enums from '../../utils/enums/Contato'

const ListaContatos = () => {
  const { itens: contatosItens } = useSelector(
    (state: RootReducer) => state.contatos
  )
  const { termo, valor, criterio } = useSelector(
    (state: RootReducer) => state.filtro
  )

  const filtraContatos = () => {
    let contatosResultantes = [...contatosItens]
    if (valor !== enums.Categoria.TODOS) {
      contatosResultantes = contatosResultantes.filter(
        (item) => item.categoria === valor
      )
    }
    if (termo) {
      contatosResultantes = contatosResultantes.filter((item) =>
        item.nome.toLocaleLowerCase().includes(termo.toLocaleLowerCase())
      )
    }
    return contatosResultantes.sort((a, b) => {
      return a.nome.localeCompare(b.nome)
    })
  }
  const contatosParaExibir = filtraContatos()
  return (
    <>
      <MainContainer>
        <Titulo>Contatos</Titulo>
        <span>
          {termo ? `Filtro por nome: "${termo}"` : ''}
          {criterio === 'categoria' && valor !== 'Todos'
            ? ` Filtro por categoria: ${valor}`
            : ''}
          {/* {criterio === 'todos' && !termo ? 'Mostrando todos os contatos' : ''} */}
        </span>{' '}
        <br />
        <ContainerCard>
          {contatosParaExibir.map((c) => (
            <li key={c.id}>
              <CardContato
                nome={c.nome}
                categoria={c.categoria}
                telefone={c.telefone}
                email={c.email}
                id={c.id}
              />
            </li>
          ))}
        </ContainerCard>
      </MainContainer>
    </>
  )
}

export default ListaContatos
