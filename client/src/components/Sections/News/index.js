import cl from '../section.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import Btn from '../../UI/Btn'
import { usePagination } from '../../../hooks/usePagination'
import $ from 'jquery'
import NewsService from '../../../services/NewsService'
import { useNavigate } from 'react-router-dom'
import { Pagination, Navigation } from "swiper"

export default function News() {

  const scrollTo = (href) => {
    $('html, body').animate({ scrollTop: $(href).offset().top  }, 550)
  }

  const news = [
    [
      {
        header: '8 документов, которые необходимо получить до подписания контракта с китайским поставщиком',
        description: 'Сохраните, если планируете работать с китайскими поставщиками',
        id: '9',
        background: 'url(https://cdn.mos.cms.futurecdn.net/tRguxDfjP2dubK5nuRk4Hk.jpg)',
        date: '2022.09.01'
      },
    ]
  ]

  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [innerHeight, setInnerHeight] = useState(window.innerHeight)
  const [page, setPage] = useState(0)
  const [pageLimit, setPageLimit] = useState(999)
  const [newsletters, setNewsletters] = useState([])
  const [normalizedNews, setNormalizedNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    window.addEventListener('resize', () => {
      setInnerWidth(window.innerWidth)
      setInnerHeight(window.innerHeight)
    })
  }, [])

  usePagination(page, async () => {
    if(page < 0 | page > pageLimit / 6) return
    setIsLoading(true)
    try {
      const fetched = await NewsService.get(page, 6, 'default')
      setPageLimit(fetched.data.x_page_count)
      setNewsletters([...fetched.data.segmented])
      fetched.data.newsletters.map(newsletter => {
        if(normalizedNews.includes(newsletter) == false) {
          setNormalizedNews([...normalizedNews, ...fetched.data.newsletters])
        }
      })
    } catch(e) {
      console.log('Planned error: ' + e)
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  })


  return (
    <section className={cl.News} id="news">
      <div className={cl.Section_header}>
        <span className='font-medium'>
          <h2> Новости компании </h2>
        </span>
      </div>
      <div className={cl.News_content}>
        {
          innerWidth >= 900
            ?
            <div className={cl.News_inner}>
              {
                newsletters.map((section, index) => {

                    const section_seg = []
                    const section_seg_1 = []
                    const section_seg_2 = []
                    section.map((e,i) => {
                      if(i < section.length/2) {
                        return section_seg_1.push(e)
                      }
                      return section_seg_2.push(e)
                    })

                    section_seg.push(section_seg_1)
                    section_seg.push(section_seg_2)

                    return (
                      <div key={index} className={`${isLoading && 'active'} News_container`} style={{minHeight: innerHeight}}>
                        {
                          isLoading
                          ?
                          <div className="lds-dual-ring"></div>
                          :
                          section_seg.map((seg, i) =>
                            <div className={cl.Newletter_list} key={i}>
                              {
                                seg.map((newsletter, index) =>
                                  <div onClick={() => navigate(`/news/${newsletter._id}`)} key={newsletter._id}  className={cl.Newletter_container} style={{backgroundImage: newsletter.background ? `url(${newsletter.background})` : 'linear-gradient(67deg, #ff9500, #ff6801)', backgroundPosition: 'center center', backgroundSize: 'cover', height: (innerHeight/2)}}>
                                    {
                                      newsletter.background &&
                                      <div className={cl.Newletter_blurer}></div>
                                    }
                                    <div className={cl.Newletter_infoheader}>
                                      {newsletter.date}
                                    </div>
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
                            </div>
                          )
                        }
                      </div>
                    )
                  }
                )
              }
              <div className={cl.Controlls}>
                {
                  page > 0 &&
                  <div className='arrow left' onClick={() => setPage(page - 1)}> </div>
                }
                {
                  page < (parseInt(pageLimit) / 6) - 1 &&
                  <div className='arrow right' onClick={() => setPage(page + 1)}> </div>
                }
              </div>
            </div>
            :
            <div className="News_container" style={{minHeight: innerHeight}}>
              <div className={cl.Newletter_list}>
                {
                  normalizedNews.map((newsletter, index) =>
                    <div onClick={() => navigate(`/news/${newsletter._id}`)} key={newsletter._id}  className={cl.Newletter_container} style={{backgroundImage: newsletter.background ? `url(${newsletter.background})` : 'linear-gradient(67deg, #ff9500, #ff6801)', backgroundPosition: 'center center', backgroundSize: 'cover', height: (innerHeight/2)}}>
                      {
                        newsletter.background &&
                        <div className={cl.Newletter_blurer}></div>
                      }
                      <div className={cl.Newletter_infoheader}>
                        {newsletter.date}
                      </div>
                      <div className={cl.Newletter_content}>
                        <div className={cl.Newletter_header}>
                          <h4> {newsletter.header} </h4>
                        </div>
                        {
                          newsletter.description &&
                            <div className={cl.Newletter_description}>
                              {newsletter.description}
                            </div>
                        }
                      </div>
                    </div>
                  )
                }
              </div>
              {
                page < (parseInt(pageLimit) / 6) - 1 &&
                <Btn onClick={() => setPage(page + 1)}> Показать еще </Btn>
              }
            </div>
        }
      </div>
    </section>
  )
}
