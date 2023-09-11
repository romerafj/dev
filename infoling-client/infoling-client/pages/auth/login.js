import React from 'react'
import { useState, useContext, useEffect } from 'react'
import Link from 'next/link'
import axios from "axios"
import { toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner';

import Heading from '../../components/site/heading';
import Container from '../../components/layout/container';

import { Context } from '../../context'
import { useRouter } from 'next/router'

export default function Login() {

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const { state, dispatch } = useContext(Context)
  const { user } = state 
  const router = useRouter()
  
  useEffect(()=>{
    if (user !== null) router.push("/")
  }, [])
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/login`, {
        email,
        password
      })
      dispatch({
        type: "LOGIN",
        payload: data,
      })
      window.localStorage.setItem('user', JSON.stringify(data))
      router.push('/')
    } catch (err) {
      if(err.response){
        toast.error('Error: ' + err.response.data)
      }
    }
    setLoading(false)
  }  

  const titulo = "Identificación en Infoling"
  const subtitulos = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quisquam rerum at, laboriosam et velit dignissimos quia aliquid praesentium ipsam maxime amet distinctio ullam sapiente dolore corrupti vitae doloremque quas."]

  return (
    <div className='bg-base-200 pb-8'>
      <Heading titulo={titulo} subtitulos={subtitulos}></Heading>
      <Container className="bg-base-100">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección de correo electrónico</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lucia@ucm.es" value={email} required onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} required onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="disabled:opacity-25 px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5" disabled={!email || !password || loading} >
              {loading ? <ThreeDots height="25" width="40" color="#fff" ariaLabel="three-dots-loading" /> : "Enviar"}
            </button>
          </form>
        </div>
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <p>¿No se ha registrado todavía? <Link href="/auth/registro" className='font-medium text-primary hover:underline dark:text-primary-500'>Registro</Link></p>
        </div>
      </Container>
    </div>
  )
}

