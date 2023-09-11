import React from 'react'
import Image from 'next/image'

function NovedadBibliograficaCarousel({ novedadesBibliograficasPortada }) {
    return (
        <section className="max-w-7x2 mx-auto px-4 sm:px-6 lg:px-4 mt-12 mb-12">
            <article>
                <section className="mt-6 grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
                    {novedadesBibliograficasPortada.map(nb => (
                        <a href="#" key={nb.id} className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <Image className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" 
                                src="/libro.png" 
                                alt="" 
                                width={100} 
                                height={100}
                            />
                            <div className="flex flex-col justify-between p-4 leading-normal">
                                <h3 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                    { nb.titulo }
                                </h3>
                                <h4 className="mb-2 text-2xl tracking-tight text-gray-700 dark:text-white">
                                    { nb.subtitulo }
                                </h4>
                                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    { nb.descripcion.substr(0, 300) }
                                </p>
                            </div>
                        </a>
                    ))}
                </section>
            </article>
        </section>
    )
}

export default NovedadBibliograficaCarousel