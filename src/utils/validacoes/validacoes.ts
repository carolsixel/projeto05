const validaTelefone = (tel: string): boolean => {
  const telefoneLimpo = tel.replace(/\s/g, '')
  if (telefoneLimpo.length > 14 || telefoneLimpo.length < 13) {
    alert('Digite um número de telefone válido.')
    return false
  }
  const regexTelefone = /^[0-9()-]+$/
  if (!regexTelefone.test(telefoneLimpo)) {
    alert('O telefone deve conter apenas números, parênteses e traço')
    return false
  }
  return true
}

const validaEmail = (mail: string): boolean => {
  const regexEmail = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
  if (!regexEmail.test(mail)) {
    alert('Por favor, insira um e-mail válido')
    return false
  }
  return true
}

export const validaSalvamento = (telefone: string, email: string): boolean => {
  if (!validaTelefone(telefone)) {
    return false
  }
  if (!validaEmail(email)) {
    return false
  }
  return true
}
