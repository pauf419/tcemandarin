import cl from './index.module.sass'
import FileInput from '../../../../../components/UI/FileInput'
import Btn from '../../../../../components/UI/Btn'
import { useState, useContext } from 'react'
import {Context} from '../../../../../index'
import { useNavigate } from 'react-router-dom'

export default function NewsletterCreate() {

  const navigate = useNavigate()

  const {store} = useContext(Context)

  const [form, setForm] = useState({})

  const changeHandler = e => {
    if(e.target.name == 'background') return setForm({...form, [e.target.name]: e.target.files[0]})
    setForm({...form, [e.target.name]: e.target.value})
  }

  const clickHandler = async () => {
    if(!form.header | !form.background | !form.description) return window.M.toast({ html: 'Для создания новости все обязательные поля должны быть заполнены!'})
    const response = await store.createNewsletter(form.header, form.description, form.short_description, form.background)
    if(response.success) navigate(`/news/${response.redirId}`)
    setForm({header: '', background: '', short_description: '', description: ''})
  }

  return (
    <div className={cl.NewsletterCreate_container}>
      <div className={cl.Section}>
        <span className={cl.Description}>
          <span className={`${cl.Status} ${cl.Required}`}>
            *
          </span>
          <div className={cl.Content}>
            Заголовок новости
          </div>
          <div className={`${cl.Status_afterline} ${cl.Required}`}>
            Обязательно к заполнению
          </div>
        </span>
        <textarea value={form.header} className="transparent-txtarea" placeholder="Введите заголовок новости" name="header" onChange={changeHandler}></textarea>
      </div>
      <div className={cl.Section}>
        <span className={cl.Description}>
          <span className={`${cl.Status} ${cl.Required}`}>
            *
          </span>
          <div className={cl.Content}>
            Тематическое изображение, связанное по смыслу с контентом новости.
          </div>
          <div className={`${cl.Status_afterline} ${cl.Required}`}>
            Обязательно к заполнению
          </div>
        </span>
        <FileInput name='background' file={form.background} onChange={changeHandler}/>
      </div>
      <div className={cl.Section}>
        <span className={cl.Description}>
          <div className={cl.Content}>
            Краткое описанное содержимое поля "Описание".
          </div>
          <div className={cl.Status_afterline}>
            Необязательно к заполнению
          </div>
        </span>
        <textarea value={form.short_description} className="transparent-txtarea font_normal" placeholder="Введите короткое описание новости" name="short_description" onChange={changeHandler}></textarea>
      </div>
      <div className={cl.Section}>
        <span className={cl.Description}>
          <span className={`${cl.Status} ${cl.Required}`}>
            *
          </span>
          <div className={cl.Content}>
            Полное описание новости. Так же можно использовать html теги.
          </div>
          <div className={`${cl.Status_afterline} ${cl.Required}`}>
            Обязательно к заполнению
          </div>
        </span>
        <textarea value={form.description} className="transparent-txtarea font_normal" placeholder="Введите описание новости" name="description" onChange={changeHandler}></textarea>
      </div>
      <div className={cl.Section}>
        <Btn style={{marginRight: 'auto'}} onClick={() => clickHandler()}> Создать </Btn>
      </div>
    </div>
  )
}
