import Navbar from './navbar'
import Footer from './footer'
import { ToastContainer } from 'react-toastify'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ToastContainer position="top-center"></ToastContainer>
      <main>{children}</main>
      <Footer />
    </>
  )
}