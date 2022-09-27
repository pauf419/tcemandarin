import { useState, useContext } from 'react'
import cl from '../section.module.sass'
import Inp from '../../UI/Inp'
import Btn from '../../UI/Btn'
import SmtpService from '../../../services/SmtpService'
import { Context } from '../../../'

export default function Ask() {

  const { store } = useContext(Context)

  const [form, setForm] = useState({
    name: '',
    number: '',
    email: '',
    description: ''
  })

  const changeHandler = e => setForm({ ...form, [e.target.name]: e.target.value })

  const clickHandler = async () => {
    await store.send(form.name, form.number, form.email, form.description)

    setForm({
      name: '',
      number: '',
      email: '',
      description: ''
    })
  }

  return (
    <section className={cl.Ask}>
      <div className="blurer"> </div>
      <div className={cl.Content}>
        <div className={cl.Form}>
          <div className={cl.Form_header} id='send_form'>
            <h2> Задайте нам вопрос. Опишите свою проблему </h2>
          </div>
          <div className={cl.Form_content}>
            <Inp
              type='text'
              placeholder='Ваше имя'
              name='name'
              onChange={changeHandler}
              value={form.name}
            />
            <Inp
              type='text'
              placeholder='Номер телефона'
              name='number'
              value={form.number}
              onChange={changeHandler}
            />
            <Inp
              type='email'
              placeholder='Почта'
              name='email'
              value={form.email}
              onChange={changeHandler}
            />
            <Inp
              type='text'
              placeholder='Описание'
              name='description'
              value={form.description}
              onChange={changeHandler}
            />
            <div className={cl.Btn_container}>
              <Btn onClick={() => clickHandler()} variant='rounded'> Отправить заявку </Btn>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
