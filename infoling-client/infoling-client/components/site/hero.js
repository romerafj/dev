import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import fondoInfoling from '../../public/img/fondo-infoling.png'

export default function Hero() {
    return (
        <div className="container mx-auto px-6 py-16 text-center">
            <div className="mx-auto max-w-lg">
                <h1 className="text-4xl font-bold text-gray-800 dark:text-white lg:text-6xl">
                    Infoling
                </h1>
                <p className="mt-6 text-gray-500 dark:text-gray-300 lg:text-2xl">Información global sobre lingüística hispánica</p>
                <button className="btn btn-primary mt-6 rounded-lg px-6 py-2.5 hover:bg-500 focus:outline-none">
                    <Link href="/compartir-informacion">
                        Compartir información
                    </Link>
                </button>
                <p className="mt-3 text-sm text-gray-400">Es necesario identificarse</p>
            </div>

            <div className="mt-10 flex justify-center">
                <Image
                    src={fondoInfoling}
                    className="h-48 w-full rounded-xl object-cover lg:w-4/5"
                    alt="Imagen decorativa de Infoling"
                />
            </div>
        </div>
    )
}
