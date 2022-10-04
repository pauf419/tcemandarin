import cl from './index.module.sass'
import {useContext, useEffect} from 'react'
import {Context} from '../../index'
import SvgBtn from '../UI/SvgBtn'

export default function Modal({modalData, active}) {

  const {store} = useContext(Context)

  useEffect(() => {
    if(active === true) setTimeout(() => {
      store.setModalActive(false)
    }, 15000)
  }, [active])

  return (
    <div className={`${cl.Modal_container} ${active ? cl.Active : ""}`}>
      <span> {modalData.message} </span>
      <button onClick={() => store.setModalActive(false)}>
        <svg xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" width="20px" height="20px" viewBox="0 0 24 24">
          <path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/>
        </svg>
      </button>
    </div>
  )
}
