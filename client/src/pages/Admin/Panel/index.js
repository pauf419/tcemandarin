import {useContext, useState} from 'react'
import {Context} from '../../../index'
import cl from './index.module.sass'
import AdminNavbar from '../../../components/AdminNavbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import NewsletterCreate from './Sections/NewsletterCreate'
import OrderView from './Sections/OrderView'
import PanelManagement from './Sections/PanelManagement'

export default function AdminPanel() {

  const {store} = useContext(Context)

  return (
    <>
      <AdminNavbar/>
      <div style={{height: 72}}></div>
      <Routes>
        <Route path='/' element={<PanelManagement/>}/>
        <Route path='/newsletter/create' element={<NewsletterCreate/>}/>
        <Route path='/order/view' element={<OrderView/>}/>
        <Route path='*' element={<navigate to='/'/>}/>
      </Routes>
    </>
  )
}
