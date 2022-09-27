import cl from '../section.module.sass'
import Btn from '../../UI/Btn'
import $ from 'jquery'

export default function WelcomeSection() {

  const scrollTo = (href) => {
    $('html, body').animate({ scrollTop: $(href).offset().top }, 550)
  }

  return (
    <section className={cl.Welcome}>
      <div className={`blurer ${cl.Blurer}`}> </div>
      <div className={cl.Greeting}>
        <p className="logo-font"> <span className="logo-1"> TCE </span> <span className="logo-2"> MANDARIN </span> </p>
        <div className={cl.Description}>
          <span> Команда экспертов по работе с Китаем, готова предоставить Вам качественную поддержку в любых самых амбициозных проектах на территории КНР. Экспорт или импорт, оборудование или сырье, наши специалисты имеют самый широкий опыт в различных отраслях. Надежный и компетентный партнер в Китае – это защита ваших инвестиций, времени и душевного спокойствия. </span>
        </div>
        <Btn onClick={() => scrollTo('#whyus')}> Интересно! Можно поподробнее? </Btn>
      </div>
    </section>
  )
}
