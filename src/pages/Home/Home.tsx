 
 
import Navbar from '@/components/layouts/Navbar'
import {  Outlet } from 'react-router-dom' 
import FooterPage from '../footer/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 w-[90%] mx-auto">
      <Navbar/> 
      <Outlet/>
      <FooterPage/>
    </div>
  )}
 