import {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import cl from '../Navbar/index.module.sass'
import logo from '../../img/logo.png'
import Btn from '../UI/Btn'
import $ from 'jquery'
import {Context} from '../../index'

export default function Navbar() {
  const [opened, setOpened] = useState(false)

  const { store } = useContext(Context)

  return (
    <header className={`${cl.Navbar_container} ${cl.Active} ${cl.Admin}`}>
        <div className={cl.Navbar}>
          <div className={cl.Navbar_section}>
            <div className={cl.Logo_inner}>
              <img className={`logo ${opened ? 'small' : 'medium'}`} style={{marginRight: 'auto'}} src={logo}/>
              <span className={cl.Status}>
                admin
              </span>
            </div>
            <div className={`${cl.Navbar_navigator_container} ${opened ? cl.Active : " "}`}>
              <div className={cl.Navigator_inner}>
                <div className={cl.Navigator_header}>
                  <div className={cl.Logo_inner}>
                    <img className={`logo ${opened ? 'small' : 'medium'}`} style={{marginRight: 'auto'}} src={logo}/>
                    <span className={cl.Status}>
                      admin
                    </span>
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
                  <Link to='/admin/newsletter/create' onClick={() => setOpened(false)}>
                    Новая новость
                  </Link >
                  <Link to='/admin/order/view' onClick={() => setOpened(false)}>
                    Просмотр заявок
                  </Link >
                  <Btn onClick={() => store.logout()}> Выйти </Btn>
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
