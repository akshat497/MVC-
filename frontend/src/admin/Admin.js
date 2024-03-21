import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { AdminHeader } from './common/AdminHeader'
import ProfilePage from './components/ProfilePage'
import { MenuCards } from './components/MenuCards'

export const Admin = () => {
  return (
    <>
        <AdminHeader/>
    <Routes>
        <Route path='/' element=<ProfilePage/>  />
        <Route path='/menucards' element=<MenuCards/>  />
    </Routes>
    </>
  )
}
