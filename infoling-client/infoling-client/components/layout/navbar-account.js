import { useContext, useEffect } from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

import { Context } from '../../context'
import axios from 'axios'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'

export default function Account() {

  const { state, dispatch } = useContext(Context)
  const user = state['user']

  const router = useRouter()

  const logout = async () => {
    dispatch({ type: "LOGOUT" })
    window.localStorage.removeItem('user')
    const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API}/logout`)
    toast(data.message)
    router.push('/auth/login')
  }

  return (
    <div>
      {user && user!==null ? (
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-outline btn-primary m-1">
            { user.name }
          </label>
          <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link href="#" onClick={logout}>Cerrar sesión</Link></li>
          </ul>
        </div>
      ) : (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-outline btn-primary m-1">
              <UserIcon className="h-6 w-6 stroke-1 hover:stroke-2" />
            </label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li><Link href="/auth/login">Identificarse</Link></li>
              <li><Link href="/auth/registro">Registrarse</Link></li>
            </ul>
          </div>
        )}
    </div>
  )
}  