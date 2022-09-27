import {useContext, useEffect} from 'react'
import {Context} from '../../index'
import {observer} from 'mobx-react-lite'
import AdminAuthLogin from './Auth/Login'
import AdminPanel from './Panel'

function AdminPage() {

    const {store} = useContext(Context)

    useEffect(() => {
      if (localStorage.getItem('token')) {
        store.checkAuth()
      }
    }, [])

    return (
      <>
        {
          store.isAuth
            ?
            <AdminPanel/>
            :
            <AdminAuthLogin/>
        }
      </>
    )
}

export default observer(AdminPage)
