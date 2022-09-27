import cl from '../section.module.sass'
import Hr from '../../UI/Hr'
import Btn from '../../UI/Btn'
import $ from 'jquery'

export default function Interlayer2() {

  const scrollTo = (href) => {
    $('html, body').animate({ scrollTop: $(href).offset().top }, 550)
  }

  return (
    <section className={`${cl.Interlayer} ${cl.Interlayer2}`}>
      <div className="blurer"> </div>
      <div className={cl.Content}>
        <div className={cl.Header}>
          <h1> Сопровождение переговоров с китайскими партнёрами, участие в выставках, организация визита в КНР. </h1>
        </div>
        <div className={cl.Description}>
          <span> Отстаивание позиции клиента и получение лучших коммерческих условий и предложений. </span>
        </div>
        <Btn variant='rounded' onClick={() => scrollTo('#send_form')}> Обсудить проект </Btn>
      </div>
    </section>
  )
}
