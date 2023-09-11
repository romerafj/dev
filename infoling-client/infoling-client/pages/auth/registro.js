import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import axios from "axios"
import { toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner';

import Heading from '../../components/site/heading';
import Container from '../../components/layout/container';

export default function Registro() {

  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [terms, setTerms] = useState(false)

  const handleChangeTerms = () => { 
    setTerms(!terms); 
  }; 

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      setLoading(true)
      const { data } = await axios.post(`${process.env.NEXT_PUBLIC_API}/register`, {
        name,
        email,
        password,
        confirmPassword
      })
      toast.success('Usuario registrado correctamente. Ahora puede identificarse.')
    } catch (err) {
      if(err.response){
        toast.error('Error: ' + err.response.data)
      } else {
        toast.error('Error al registrar el usuario. El servidor no responde.')
      }
    }
    setLoading(false)
  }

  const titulo = "Registro"
  const subtitulos = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro, quisquam rerum at, laboriosam et velit dignissimos quia aliquid praesentium ipsam maxime amet distinctio ullam sapiente dolore corrupti vitae doloremque quas."]

  return (
    <div className='bg-base-200 pb-8'>
      <Heading titulo={titulo} subtitulos={subtitulos}></Heading>
      <Container className="bg-base-100">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Nombre</label>
              <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Lucía García" value={name} required="" onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Dirección de correo electrónico</label>
              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="lucia@ucm.es" value={email} required="" onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Contraseña</label>
              <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={password} required="" onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repetir contraseña</label>
              <input type="password" name="confirmPassword" id="confirmPassword" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" value={confirmPassword} required="" onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required="" onChange={handleChangeTerms} />
              </div>
              <div className="ml-3 text-sm">
                <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">Acepto los <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="/legal">Términos y condiciones</a></label>
              </div>
            </div>
            <button type="submit" className="disabled:opacity-25 px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5" disabled={!terms || !name || !email || !password || !confirmPassword || loading} >
              {loading ? <ThreeDots height="25" width="40" color="#fff" ariaLabel="three-dots-loading" /> : "Enviar"}
            </button>
            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
              ¿Ya se ha registrado? <Link href="/auth/login" className="font-medium text-primary hover:underline dark:text-primary-500">Identifíquese aquí</Link>
            </p>
          </form>
        </div>
      </Container>
    </div>
  )
}

