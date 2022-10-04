import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import cl from './index.module.sass'
import logo from '../../img/logo.png'
import SvgBtn from '../UI/SvgBtn'
import $ from 'jquery'

export default function Navbar() {

  const location = useLocation()
  const navigate = useNavigate()

  const [active, setActive] = useState(false)
  const [opened, setOpened] = useState(false);

  var $win = $(window)

  $win.scroll(function () {
    if($win.scrollTop() === 0) {
      setActive(false)
    } else {
      setActive(true)
    }
  })

  const scrollTo = async (href) => {
    if(location.pathname !== '/') await navigate(`/`)
    $('html, body').animate({ scrollTop: $(href).offset().top }, 200)
    setOpened(false)
  }

  return (
    <header className={`${cl.Navbar_container} ${active && !opened ? cl.Active : ''}`}>
        <div className={cl.Navbar}>
          <div className={cl.Navbar_section}>
            <img className={`logo ${active && !opened ? 'small' : 'medium'}`} style={{marginRight: 'auto'}} src={logo}/>
            <div className={`${cl.Navbar_navigator_container} ${opened ? cl.Active : " "}`}>
              <div className={cl.Navigator_inner}>
                <div className={cl.Navigator_header}>
                  <div className={cl.Logo}>
                    <img className={`logo small`} src={logo}/>
                    <p> TCE MANDARIN </p>
                  </div>
                  <div className={cl.Break} onClick={() => setOpened(false)}>
                    <div className={`${cl.Hamburger_btn} ${cl.Break}`}>
                      <span className={`${cl.Hamburger_line} ${cl.Line_1}`}></span>
                      <span className={`${cl.Hamburger_line} ${cl.Line_2}`}></span>
                    </div>
                  </div>
                </div>
                <div className={cl.Separator}></div>
                <div className={cl.Content}>
                  <a onClick={() => navigate('/')}>
                    Главная
                  </a>
                  <a onClick={() => scrollTo('#news')}>
                    Новости
                  </a>
                  <a onClick={() => scrollTo('#whyus')}>
                    О нас
                    <span></span>
                  </a>
                  <a onClick={() => scrollTo('#specialists')}>
                    Команда TCE
                  </a>
                  <a onClick={() => scrollTo('#footer')}>
                    Контакты
                  </a>
                  <div className={cl.Soc_promo}>
                    <SvgBtn href="https://t.me/TCEmandarin">
                      <svg width="24px" height="24px" version="1.1" viewBox="0 0 24 24"><path id="telegram-3" d="M19,24l-14,0c-2.761,0 -5,-2.239 -5,-5l0,-14c0,-2.761 2.239,-5 5,-5l14,0c2.762,0 5,2.239 5,5l0,14c0,2.761 -2.238,5 -5,5Zm-2.744,-5.148c0.215,0.153 0.491,0.191 0.738,0.097c0.246,-0.093 0.428,-0.304 0.483,-0.56c0.579,-2.722 1.985,-9.614 2.512,-12.09c0.039,-0.187 -0.027,-0.381 -0.173,-0.506c-0.147,-0.124 -0.351,-0.16 -0.532,-0.093c-2.795,1.034 -11.404,4.264 -14.923,5.567c-0.223,0.082 -0.368,0.297 -0.361,0.533c0.008,0.235 0.167,0.44 0.395,0.509c1.578,0.471 3.65,1.128 3.65,1.128c0,0 0.967,2.924 1.472,4.41c0.063,0.187 0.21,0.334 0.402,0.384c0.193,0.05 0.397,-0.002 0.541,-0.138c0.811,-0.765 2.064,-1.948 2.064,-1.948c0,0 2.381,1.746 3.732,2.707Zm-7.34,-5.784l1.119,3.692l0.249,-2.338c0,0 4.324,-3.9 6.79,-6.124c0.072,-0.065 0.082,-0.174 0.022,-0.251c-0.06,-0.077 -0.169,-0.095 -0.251,-0.043c-2.857,1.825 -7.929,5.064 -7.929,5.064Z"/></svg>
                    </SvgBtn>
                    <SvgBtn href="https://wa.me/861850170990">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.036 5.339c-3.635 0-6.591 2.956-6.593 6.589-.001 1.483.434 2.594 1.164 3.756l-.666 2.432 2.494-.654c1.117.663 2.184 1.061 3.595 1.061 3.632 0 6.591-2.956 6.592-6.59.003-3.641-2.942-6.593-6.586-6.594zm3.876 9.423c-.165.463-.957.885-1.337.942-.341.051-.773.072-1.248-.078-.288-.091-.657-.213-1.129-.417-1.987-.858-3.285-2.859-3.384-2.991-.099-.132-.809-1.074-.809-2.049 0-.975.512-1.454.693-1.653.182-.2.396-.25.528-.25l.38.007c.122.006.285-.046.446.34.165.397.561 1.372.611 1.471.049.099.083.215.016.347-.066.132-.099.215-.198.33l-.297.347c-.099.099-.202.206-.087.404.116.198.513.847 1.102 1.372.757.675 1.395.884 1.593.983.198.099.314.083.429-.05.116-.132.495-.578.627-.777s.264-.165.446-.099 1.156.545 1.354.645c.198.099.33.149.38.231.049.085.049.482-.116.945zm3.088-14.762h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-6.967 19.862c-1.327 0-2.634-.333-3.792-.965l-4.203 1.103 1.125-4.108c-.694-1.202-1.059-2.566-1.058-3.964.002-4.372 3.558-7.928 7.928-7.928 2.121.001 4.112.827 5.609 2.325s2.321 3.491 2.32 5.609c-.002 4.372-3.559 7.928-7.929 7.928z"/></svg>
                    </SvgBtn>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${cl.Hamburger_btn} ${opened ? cl.Active : " "}`} onClick={() => setOpened(true)}>
              <span className={cl.Hamburger_line}></span>
              <span className={cl.Hamburger_line}></span>
              <span className={cl.Hamburger_line}></span>
            </div>
          </div>
        </div>
    </header>
  )
}
