import {useContext, useState} from 'react'
import {Context} from '../../../index'
import cl from './index.module.sass'
import AdminNavbar from '../../../components/AdminNavbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import NewsletterCreate from './Sections/NewsletterCreate'
import OrderView from './Sections/OrderView'
import PanelManagement from './Sections/PanelManagement'
import NewslettersDeleteSelect from './Sections/NewslettersActBoard/NewslettersDeleteSelect'
import NewslettersDeleteById from './Sections/NewslettersActBoard/NewslettersDeleteById'
import NewslettersActBoard from './Sections/NewslettersActBoard'

export default function AdminPanel() {

  const {store} = useContext(Context)

  return (
    <>
      <AdminNavbar/>
      <div style={{height: 72}}></div>
      <Routes>
        <Route path='/' element={<PanelManagement/>}/>
        <Route path='/newsletter/create' element={<NewsletterCreate/>}/>
        <Route path='/newsletter/action' element={<NewslettersActBoard/>}/>
        <Route path='/newsletter/delete_by_id' element={<NewslettersDeleteById/>} exact/>
        <Route path='/newsletter/delete_select' element={<NewslettersDeleteSelect/>} exact/>
        <Route path='/order/view' element={<OrderView/>}/>
        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </>
  )
}
