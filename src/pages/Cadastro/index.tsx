import BarraLateral from '../../containers/BarraLateral'
import Formulario from '../../containers/FormNovoContato'

const Cadastro = () => {
  return (
    <>
      <BarraLateral mostrarFiltro={false} />
      <Formulario />
    </>
  )
}

export default Cadastro
