import React from 'react'
import Link from "next/link";
import Image from "next/image";

export default function Colaboradores() {

    const logosColaboradores = [
        {
            "url": "https://altya.webnode.es/",
            "img": "/img/colaboradores/logo-1.jpg",
            "width": 75,
            "height": 75,
        },
        {
            "url": "https://www.unav.edu/web/centro-de-escritura",
            "img": "/img/colaboradores/logo-2.png",
            "width": 300,
            "height": 75,
        },
        {
            "url": "https://editorial.us.es/",
            "img": "/img/colaboradores/logo-3.png",
            "width": 300,
            "height": 75,
        },
        {
            "url": "https://cms.ual.es/UAL/universidad/departamentos/filologia/index.htm",
            "img": "/img/colaboradores/logo-4.png",
            "width": 75,
            "height": 75,
        },
        {
            "url": "https://sites.google.com/view/lsm-lab",
            "img": "/img/colaboradores/logo-5.jpg",
            "width": 150,
            "height": 75,
        },
        {
            "url": "https://preseea.uah.es/",
            "img": "/img/colaboradores/logo-6.jpg",
            "width": 300,
            "height": 75,
        },
        {
            "url": "http://spanishfn.org/",
            "img": "/img/colaboradores/logo-7.png",
            "width": 175,
            "height": 75,
        },
        {
            "url": "http://filescat.uab.cat/filesp",
            "img": "/img/colaboradores/logo-8.png",
            "width": 300,
            "height": 75,
        },
    ]

    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="h-[32rem] bg-gray-100 dark:bg-gray-800">
                <div className="container mx-auto px-6 py-8">
                    <h2 className="text-center text-2xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Colaboradores</h2>

                    <div className="mx-auto mt-6 flex justify-center">
                        <span className="inline-block h-1 w-40 rounded-full bg-blue-500"></span>
                        <span className="mx-1 inline-block h-1 w-3 rounded-full bg-blue-500"></span>
                        <span className="inline-block h-1 w-1 rounded-full bg-blue-500"></span>
                    </div>

                    <p className="mx-auto mt-6 max-w-2xl text-center text-gray-500 dark:text-gray-300">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error alias, adipisci rem similique, at omnis eligendi optio eos harum.</p>
                </div>
                <div className="flex flex-wrap justify-center gap-3 mt-10 md:justify-around px-36">
                    {logosColaboradores.map((item, index) => (
                        <Link key={index} href={item.url} target="_blank">
                            <div className="pt-2 text-gray-400 dark:text-gray-400">
                                <Image
                                    src={item.img}
                                    width={item.width}
                                    height={item.height}
                                    alt="Logo de un colaborador de Infoling"
                                />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
