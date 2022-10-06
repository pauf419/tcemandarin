import cl from '../index.module.sass'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import NewsList from '../../../../../../components/Sections/News/NewsList'
import { Context } from '../../../../../../index'

export default function NewslettersDeleteSelect() {

  const navigate = useNavigate()

  const {store} = useContext(Context)

  const preClick = async (id) => {
    await store.delete(id)
    navigate('/admin/newsletter/action')
  }

  return (
    <div className={cl.SelectNewsletter_container}>
      <div className={cl.Header}>
        <h2> Нажмите на новость, что бы удалить ее </h2>
      </div>
      <NewsList mode={'delete'} customOnClick={() => preClick}/>
    </div>
  )
}
