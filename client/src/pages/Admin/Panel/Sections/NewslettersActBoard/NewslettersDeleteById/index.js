import cl from '../index.module.sass'
import Btn from '../../../../../../components/UI/Btn'
import Inp from '../../../../../../components/UI/Inp'
import { useContext, useState } from 'react'
import { Context }  from '../../../../../../index'

export default function NewslettersDeleteById() {

  const { store } = useContext(Context)

  const [id, setId] = useState(null)

  return (
    <div className={cl.DeleteById_container}>
      <div className={cl.Content}>
        <Inp value={null} placeholder="Введите идентификатор новости" onChange={e => setId(e.target.value)}/>
        <Btn onClick={() => store.delete(id)}> Удалить </Btn>
      </div>
    </div>
  )
}
