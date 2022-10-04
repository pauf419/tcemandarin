import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState, useRef } from 'react'
import cl from '../section.module.sass'
import { Pagination, Navigation } from "swiper"
import "swiper/css/pagination"
import Mariya from '../../../img/Mariya.png'
import Olga from '../../../img/Olga.jpg'
import Anastasia from '../../../img/Anastasia.png'
import Slava from '../../../img/gdir.jpg'
import Evgeniy from '../../../img/Evgeniy.jpg'
import Botakoz from '../../../img/Botakoz.jpg'
import Elena from '../../../img/Elena.jpg'
import Chshao from '../../../img/Chshao.jpg'
import Person from './Person'
import "swiper/css/navigation"

export default function SpecialistsSection() {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  const [personWidth, setPersonWidth] = useState()

  const personsLineRef = useRef(null)

  useEffect(() => {
    if(!personWidth && personsLineRef.current) setPersonWidth(personsLineRef.current.offsetWidth / 3)
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth)
      if(window.innerWidth < 900) setPersonWidth('auto')
      else if(!personWidth && personsLineRef.current) setPersonWidth(personsLineRef.current.offsetWidth / 3)
    })
  }, [])

  const sections = [
    [
      {
        picture: Slava,
        name: 'Вячеслав',
        block1: '11 лет в Китае',
        block2: 'Ретейл и маркетинг импортных потребительских товаров в КНР',
        block3: `
          <div> Магистратура – юриспруденция </div>
          <div> Докторантура – экономика и менеджмент </div>
        `,
        wechat: '+86 13130415633',
        number: '+86 13130415633',
        whatsup: '+86 13130415633',
      },
      {
        picture: Olga,
        name: 'Ольга',
        block1: '12 лет в Китае',
        block2: 'Специалист по средствам защиты растений, удобрениям, деревообработке ',
        block3: `
          Кандидат наук в области обработки материалов.
        `,
        wechat: '+86 18601666421',
        viber: '+86 18601666421',
        number: '+86 18601666421',
      },
      {
        picture: Anastasia,
        name: 'Анастасия',
        block1: '18 лет в Китае',
        block2: 'Общее право, магистр права в области охраны окружающей среды',
        block3: 'Специализация: законы и правила Китая, рынок ухода за пожилыми людьми, межкультурная адаптация продукта, производственное оборудование',
        wechat: '+86 18616241097',
        telegram: '+86 18616241097',
        whatsup: '+86 18616241097',
        number: '+86 18616241097',
      },
    ],
    [
      {
        picture: Mariya,
        name: 'Мария',
        block1: '12 лет в Китае',
        block2: 'Специалист в индустрии Биомедицины, медицинского оборудования, сырья для биокосметики',
        block3: `
          <div> Магистратура – промышленная экономика </div>
          <div> Докторантура – экономика и менеджмент </div>
        `,
        wechat: '+86 15524567539',
        number: '+86 15524567539',
      },
      {
        picture: Evgeniy,
        name: 'Евгений',
        block1: '7 лет в Китае',
        block2: 'Специалист в языкознании и международных связях. Закупки автомобильных запчастей',
        block3: 'Бакалавр  – Лингвистика ',
        wechat: '+86 18717806931',
        telegram: '@TCEmandarin',
        whatsup: '+86 18717806931',
        number: '+86 18717806931',
        pic_custom_styles: {backgroundSize: "130%", backgroundPosition: "top center"}
      },
      {
        picture: Botakoz,
        name: 'Ботакоз',
        block1: '6 лет в Китае',
        block2: 'Международная экономика и торговля',
        block3: 'Специализация: маркетинг WeChat, китайские социальные сети, создание контента, офлайн-маркетинг. Анализ рынка, стратегия локализации в F&B, Подбор персонала, интерпретация. Формирование сообщества студентов и молодых специалистов',
        quote: null,
        wechat: '13710743034',
      },
    ],
    [
      {
        picture: Elena,
        name: 'Елена',
        block1: '10 лет в Китае',
        block2: 'Специалист в сфере аддитивных технологий (3D печать) и тестирования материалов',
        block3: 'Кандидат наук в области обработки материалов',
        custom_styles: {width: personWidth},
        pic_custom_styles: {backgroundSize: 'cover', backgroundPosition: 'center center'}
      },
      {
        picture: Chshao,
        name: 'Чжао Шаньхэ',
        block1: 'Родился, и живет в Китае',
        block2: 'Специалист в области автоматизации, робототехники и электронных компонентов',
        block3: 'Магистратура - Силовая электроника и электроприводы',
        custom_styles: {width: personWidth},
        pic_custom_styles: {backgroundSize: 'cover', backgroundPosition: 'center center'}
      }
    ]
  ]

  return (
    <section className={cl.Specialists}>
      <div className={cl.Section_header} id='specialists'>
        <span className="font-medium">
          <h2> Наши специалисты </h2>
        </span>
        <span className={cl.Header_afterline}>
          Наша компания — это наша команда, это профи с многолетним опытом работы с китайскими партнерами. Мы говорим на одном языке, прекрасно понимаем особенности восточного менталитета и переговорного процесса, знаем на что нужно обращать внимание.
        </span>
      </div>
      <div className={cl.Swiper_container}>
        {
          innerWidth <= 900
            ?
            <div className={cl.Slides_mobile_container}>
              {
                sections.map(section =>
                  section.map(person =>
                    <div className={`${cl.Slide_container} ${cl.Mobile}`} key={person.name}>
                      <Person person={person} defaultActive/>
                    </div>
                  )
                )
              }
            </div>
            :
            sections.map((section, index) =>
              <div className={cl.Slide_container} key={index} ref={personsLineRef}>
                {
                  section.map(person =>
                    <Person person={person} key={person.name}/>
                  )
                }
              </div>
            )
        }

      </div>
    </section>
  )
}
