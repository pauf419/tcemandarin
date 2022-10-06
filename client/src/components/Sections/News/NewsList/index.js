import cl from '../../section.module.sass'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useEffect, useState } from 'react'
import Btn from '../../../UI/Btn'
import { usePagination } from '../../../../hooks/usePagination'
import NewsService from '../../../../services/NewsService'
import { useNavigate } from 'react-router-dom'
import Newsletter from './Newsletter'

export default function NewsList({mode = 'default', customOnClick}) {

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
                          <div className={`${cl.Newletter_list} ${mode == 'delete' ? cl.DeleteMode : ""}`} key={i}>
                            {
                              seg.map((newsletter) =>
                                <Newsletter
                                  newsletter={newsletter}
                                  onClick={mode == 'delete' ? customOnClick() : () => navigate(`/news/${newsletter._id}`)} 
                                  key={newsletter._id}
                                  mode={mode}
                                />
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
            <div className={`${cl.Newletter_list} ${mode == 'delete' ? cl.DeleteMode : ""}`}>
              {
                normalizedNews.map((newsletter, index) =>
                  <Newsletter newsletter={newsletter}  onClick={() => navigate(`/news/${newsletter._id}`)} key={newsletter._id} mode={mode}/>
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
  )
}
