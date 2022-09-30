import {useState, useContext} from 'react'
import {Context} from '../../../../index'
import cl from '../index.module.sass'
import Inp from '../../../../components/UI/Inp'
import Btn from '../../../../components/UI/Btn'
import { useNavigate, Link } from 'react-router-dom'

export default function AdminAuthLogin() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { store } = useContext(Context)

    const clickHandler = async () => {
      const response = await store.login(email, password)
      if(!response.failed) {
        setEmail('')
        setPassword('')
      }
    }

    return (
      <div className={cl.AdminAuth_container}>
        <div className={cl.AdminAuth_section__content}>
          <div className={cl.Section_header}>
            <span className="font-medium">
              <h2> Вход в аккаунт </h2>
            </span>
          </div>
          <div className={cl.Section_action}>
            <Inp type="email" value={email} default placeholder='Введите email' onChange={e => setEmail(e.target.value)}/>
            <Inp type="password" value={password} default placeholder='Введите пароль' onChange={e => setPassword(e.target.value)}/>
            <Btn variant='rounded' onClick={() => clickHandler()}> Войти </Btn>
          </div>
        </div>
        <div className={cl.AdminAuth_section__promo}>
          <div className={`blurer ${cl.Blurer}`}> </div>
          <p className="logo-font"> <span className="logo-1"> TCE </span> <span className="logo-2"> MANDARIN </span> </p>
        </div>
      </div>
    )
}
