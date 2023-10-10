import { Header } from '@/components/widgets/header'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}
