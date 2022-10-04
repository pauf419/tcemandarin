import {useParams} from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import cl from './index.module.sass'
import NewsService from '../../services/NewsService'
import Btn from '../../components/UI/Btn'
import { useNavigate } from 'react-router-dom'
import {Context} from '../../index'

export default function NewsletterPage() {

  const {store} = useContext(Context)

  const navigate = useNavigate()

  const [newsletter, setNewsletter] = useState({})

  const {id} = useParams()

  const fetchNewsletter = async() => {
    let newsletter = await store.getNewsletterById(id)
    if(newsletter.failed) return navigate('/')
    setNewsletter(newsletter.newsletter)
  }

  useEffect(() => {
    fetchNewsletter()
  }, [])

  return (
    <div className={cl.NewsletterPage_container}>
      {
        newsletter
          &&
          <div className={cl.Newsletter_container}>
            <div className={cl.Section}>
              <div className={cl.Newsletter_header}>
                <span className='font-middle'> <h2> { newsletter.header } </h2> </span>
              </div>
            </div>
            <div className={cl.Section}>
              <div
                className={cl.Newsletter_background}
                style={
                  {
                    backgroundPosition: 'center center',
                    backgroundSize: 'cover',
                    backgroundImage: `url(${newsletter.background})`,
                  }
                }
              >

              </div>
            </div>
            <div className={cl.Section}>
              <div className={cl.Newsletter_description} dangerouslySetInnerHTML={{__html: newsletter.description}}>
              </div>
            </div>
            <div className={cl.Section}>
              <div className={cl.Newsletter_end}>
                <Btn onClick={() => navigate('/')}> Главная страница </Btn>
              </div>
            </div>
          </div>
      }
    </div>
  )
}
