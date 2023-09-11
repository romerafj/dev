import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/img/logo.png'
import Account from './navbar-account'

export default function Navbar() {

    
    const [current, setCurrent] = useState("");
    
    
    /* TODO Active Links
    const hasWindow = () => {
        return typeof window !== "undefined"
    }

    useEffect(()=>{
        console.log(hasWindow && setCurrent(window.location.pathname))
    }, [hasWindow && setCurrent(window.location.pathname)])
    */

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Item 1</a></li>
                        <li tabIndex={0}>
                            <a className="justify-between">
                                Parent
                                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" /></svg>
                            </a>
                            <ul className="p-2">
                                <li><a>Submenu 1</a></li>
                                <li><a>Submenu 2</a></li>
                            </ul>
                        </li>
                        <li><a>Item 3</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-xl">
                    <Image src={logo} width={250} height={125} alt="Infoling logo" />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><Link key="/" href="/" className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8" onClick={e => setCurrent(e.key)}>Inicio</Link></li>
                    <li><Link key="/compartir-informacion" href="/compartir-informacion" className="transform text-gray-700 transition-colors duration-300 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 lg:mx-8" onClick={e => setCurrent(e.key)}>Compartir información</Link></li>
                </ul>
            </div>
            <div className="navbar-end lg:visible">
                <Account />
            </div>
        </div>
    )
}