import { Link } from 'react-router-dom'
import imagemAddContato from '../../icons/add_contact.svg'

const BotaoCadastro = () => (
  <>
    <Link to="/novo">
      <div>
        <img src={imagemAddContato} alt="Cadastrar novo contato" />
      </div>
    </Link>
  </>
)

export default BotaoCadastro
