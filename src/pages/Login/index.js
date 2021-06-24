import * as S from './styles'
import { useState } from 'react'
import api from '../../module/axios'
import { HiddenLabel, Input } from '../../components'

export const Login = ({ setUser }) => {
  const [inputUser, setInputUser] = useState('')

  const getUser = async ({ inputUser }) => {
    try {
      const response = await api.get(`/users/${inputUser}`)
      setUser(response.data)
    } catch (e) {
      console.error('usuário não encontrado')
    }
  }

  return (
    <S.Container>
      <S.Title>Entre como administrador</S.Title>
      <S.Form action="" autocomplete="off">
        <HiddenLabel id="user">Digite o ID do usuário</HiddenLabel>
        <Input
          value={inputUser}
          onChange={e => setInputUser(e.target.value)}
          id="user"
          type="text"
          name="user"
          placeholder="Digite o nome de usuário"
          autoComplete="off"
        />
        <S.Button
          onClick={e => {
            e.preventDefault()
            getUser({ inputUser })
          }}
        >
          Confirmar
        </S.Button>
      </S.Form>
    </S.Container>
  )
}
