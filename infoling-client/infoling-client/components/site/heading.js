import React from 'react'

function Heading({ titulo, subtitulos }) {
    return (
        <div className="container mx-auto pt-8 text-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                {titulo}
            </h1>
            {
                subtitulos.map((subtitulo, key) => {
                    return (
                        <p key={key} className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
                            { subtitulo }
                        </p>
                    )
                })
            }
        </div>
    )
}

export default Heading