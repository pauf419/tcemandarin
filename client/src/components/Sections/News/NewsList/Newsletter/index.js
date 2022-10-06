import cl from './index.module.sass'
import { useEffect, useState } from 'react'
import Btn from '../../../../UI/Btn'

export default function Newsletter({newsletter, onClick, mode = 'default'}) {

  const [innerHeight, setInnerHeight] = useState(window.innerHeight)

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerHeight(window.innerHeight)
    })
  }, [])

  return (
    <div onClick={mode == 'delete' ? () => onClick(newsletter._id) : onClick} key={newsletter._id}  className={`${cl.Newletter_container} ${mode == 'delete' ? cl.DeleteMode : ''}`} style={{backgroundImage: newsletter.background ? `url(${newsletter.background})` : 'linear-gradient(67deg, #ff9500, #ff6801)', backgroundPosition: 'center center', backgroundSize: 'cover', height: (innerHeight/2)}}>
      {
        newsletter.background &&
        <div className={cl.Newletter_blurer}>
          {
            mode == 'delete' &&
            <div className={cl.Delete}>
              <Btn> Удалить </Btn>
            </div>
          }
        </div>
      }
      <div className={cl.Newletter_content}>
        <div className={cl.Newletter_header}>
          <h4> {newsletter.header} </h4>
        </div>
        {
          newsletter.short_description &&
            <div className={cl.Newletter_description}>
              {newsletter.short_description}
            </div>
        }
      </div>
    </div>
  )
}
