import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import cl from './index.module.sass'
import NewsService from '../../services/NewsService'
import Btn from '../../components/UI/Btn'
import { useNavigate } from 'react-router-dom'

export default function NewsletterPage() {

  const navigate = useNavigate()

  const [newsletter, setNewsletter] = useState({})

  const {id} = useParams()

  const fetchNewsletter = async() => {
    let newsletter = await NewsService.getById(id)
    setNewsletter(newsletter.data.newsletter)
  }

  useEffect(() => {
    fetchNewsletter()
  }, [])

  return (
    <div className={cl.NewsletterPage_container}>
      {
        newsletter
          ?
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
          :
          <h1> Loading </h1>
      }
    </div>
  )
}
