import { Navigate, Routes, Route } from 'react-router-dom'
import Main from '../pages/Main'
import AdminPage from '../pages/Admin'

export function useRoutes() {
  return (
    <Routes>
      <Route path="/*" element={<Main/>} exact/>
      <Route path="/admin/*" element={<AdminPage/>}/>
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}
