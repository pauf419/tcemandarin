import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import cl from '../section.module.sass'
import { Pagination, Navigation } from "swiper"
import "swiper/css/pagination"
import Mariya from '../../../img/Mariya.png'
import Olga from '../../../img/Olga.jpg'
import Anastasia from '../../../img/Anastasia.png'
import Slava from '../../../img/gdir.jpg'
import Evgeniy from '../../../img/Evgeniy.png'
import Botakoz from '../../../img/Botakoz.jpg'
import Person from './Person'
import "swiper/css/navigation"

export default function SpecialistsSection() {

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener('resize', () => setInnerWidth(window.innerWidth));
  }, [])

  const sections = [
    [
      {
        picture: Slava,
        name: 'Вячеслав',
        reg: 'Шанхай',
        block1: '11 лет в Китае.',
        block2: 'Ретейл и маркетинг импортных потребительских товаров в КНР',
        block3: `
          <div> Магистратура – юриспруденция </div>
          <div> Докторантура – экономика и менеджмент </div>
        `,
        quote: null,
        wechat: '+86 13130415633',
        number: '+86 13130415633',
        viber: null,
        whatsup: '+86 13130415633'
      },
      {
        picture: Olga,
        name: 'Ольга',
        reg: 'Шанхай',
        block1: '12 лет в Китае.',
        block2: 'Специалист по средствам защиты растений, удобрениям, деревообработке ',
        block3: `
          Кандидат наук в области обработки материалов.
        `,
        quote: null,
        wechat: '+86 18601666421',
        viber: '+86 18601666421',
        number: '+86 18601666421'
      },
      {
        picture: Anastasia,
        name: 'Анастасия',
        reg: 'Шанхай',
        block1: '18 лет в Китае.',
        block2: 'Общее право, магистр права в области охраны окружающей среды.',
        block3: 'Специализация: законы и правила Китая, рынок ухода за пожилыми людьми, межкультурная адаптация продукта, производственное оборудование.',
        quote: null,
        wechat: '+86 18616241097',
        telegram: '+86 18616241097',
        whatsup: '+86 18616241097',
        number: '+86 18616241097',
        viber: null
      },
    ],
    [
      {
        picture: Mariya,
        name: 'Мария',
        reg: 'Шанхай',
        block1: '12 лет в Китае.',
        block2: 'Специалист в индустрии Биомедицины, медицинского оборудования, сырья для биокосметики',
        block3: `
          <div> Магистратура – промышленная экономика </div>
          <div> Докторантура – экономика и менеджмент </div>
        `,
        quote: null,
        wechat: '+86 15524567539',
        number: '+86 15524567539',
        viber: null
      },
      {
        picture: Evgeniy,
        name: 'Евгений',
        reg: 'Шанхай',
        block1: '7+ лет в Китае.',
        block2: 'Специалист в языкознании и международных связях. Закупки автомобильных запчастей',
        block3: 'Бакалавр  – Лингвистика ',
        quote: null,
        wechat: '+86 18717806931',
        telegram: '+86 18717806931',
        whatsup: '+86 18717806931',
        number: '+86 18717806931',
        viber: null
      },
      {
        picture: Botakoz,
        name: 'Ботакоз',
        reg: 'Шанхай',
        block1: '6 лет в Китае.',
        block2: 'Международная экономика и торговля.',
        block3: 'Специализация: маркетинг WeChat, китайские социальные сети, создание контента, офлайн-маркетинг. Анализ рынка, стратегия локализации в F&B, Подбор персонала, интерпретация. Формирование сообщества студентов и молодых специалистов.',
        quote: null,
        wechat: '13710743034'
      },
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
            <Swiper
              spaceBetween={24}
              slidesPerView={1}
              navigation={true}
              modules={[Navigation]}
              className="mySwiper"
            >
              {
                sections.map(section =>
                  section.map(person =>
                    <SwiperSlide key={person.name}>
                      <div className={`${cl.Slide_container} ${cl.Mobile}`}>
                        <Person person={person} defaultActive/>
                      </div>
                    </SwiperSlide>
                  )
                )
              }
            </Swiper>
            :
            sections.map((section, index) =>
              <div className={cl.Slide_container} key={index}>
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
