import cl from '../section.module.sass'
import Hr from '../../UI/Hr'
import Btn from '../../UI/Btn'
import $ from 'jquery'

export default function Interlayer() {

  const scrollTo = (href) => {
    $('html, body').animate({ scrollTop: $(href).offset().top }, 550)
  }

  return (
    <section className={cl.Interlayer}>
      <div className={`${cl.Blurer} blurer`}> </div>
      <div className={cl.Content}>
        <div className={cl.Header}>
          <h1> Квалифицированный штат наших специалистов уже готов приступить к работе и отстаивать именно Ваши интересы, добиваясь поставленных целей и задач </h1>
        </div>
        <Hr style={{width: '100px', background: '#ff6801'}}/>
        <div className={cl.Description}>
          <span> В вашем распоряжении команда экспертов с многолетним опытом работы на рынке КНР и компетенцией в различных отраслевых направлениях, знанием культурных и деловых особенностей восточных партнёров; юридическое лицо с возможностью ведения импортно-экспортных операций по более чем 35 сферам деятельности. </span>
        </div>
        <Btn variant='rounded' onClick={() => scrollTo('#send_form')}> Обсудить проект </Btn>
      </div>
    </section>
  )
}
