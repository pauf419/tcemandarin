import { useContext, useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { useRoutes } from './routes'
import { Context } from './index'
import { observer } from 'mobx-react-lite'
import logo from './img/logo.png'

function App() {

  const {store} = useContext(Context)

  const routes = useRoutes()

  return (
    <BrowserRouter>
      {
        store.loading &&
          <div className='loading-blurer'>
            <span>
              <div className='spiner'>
              </div>
              <div className='logo-container'>
                <img src={logo}/>
              </div>
            </span>
          </div>
      }
      { routes }
    </BrowserRouter>
  )
}

export default observer(App)
