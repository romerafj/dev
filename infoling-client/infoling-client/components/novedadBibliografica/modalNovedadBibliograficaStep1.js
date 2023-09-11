import {useState } from 'react'
import { UserIcon } from '@heroicons/react/24/outline'
import { BookOpenIcon } from '@heroicons/react/24/outline'

function ModalNovedadBibliograficaStep1({
    autores,
    titulo,
    subtitulo,
    anno,
    lugarEdicion,
    editorial,
    coleccion,
    url,
    tematicas,
    formatos,
    indice,
    descripcion,
    imagenes
}) {

    const openNextModal = (e) => {
        e.preventDefault()
        document.getElementById('modal-form-nb-1').checked = false;
        document.getElementById('modal-form-nb-2').checked = true;
        document.getElementById('modal-form-nb-3').checked = false;
    }

    function createMarkupDescripcion() {
        return {__html: descripcion};
    }

    function createMarkupIndice() {
        return {__html: indice};
    }

    return (
        <>
            <input type="checkbox" id="modal-form-nb-1" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg pb-12">Estos son los datos que se enviarán a Infoling. Por favor revise que todo sea correcto y pulse Enviar. En caso contrario pulse Modificar.</h3>

                    <div className="grid grid-cols-5 gap-3">
                        <div className="h-full w-48 bg-gray-100 border border-gray-300 flex flex-col">
                            <div className="h-6 bg-gray-400 opacity-50 w-full">
                                Imagen del libro
                            </div>
                            {
                                imagenes && <img className="w-full object-contain min-h-0" src={URL.createObjectURL(imagenes)} />
                            }
                        </div>
                        <div className="bg-blue-100 col-span-4 p-4">
                            <p className="text-xl">
                                <strong>Título: </strong>{ titulo }
                            </p>
                            {
                                subtitulo && 
                                    <p className="text-lg">
                                        <strong>Subtítulo: </strong>{ subtitulo }
                                    </p>
                            }
                            <p className="text-base">
                                <strong>Lugar de edición: </strong>{ lugarEdicion }
                            </p>
                            <p className="text-base">
                                <strong>Editorial: </strong>{ editorial }
                            </p>
                            {
                                coleccion && 
                                    <p className="text-base">
                                        <strong>Colección: </strong>{ coleccion }
                                    </p>
                            }
                            <p className="text-base">
                                <strong>Año de publicación: </strong>{ anno }
                            </p>
                            {
                                url && 
                                    <p className="text-base">
                                        <strong>URL de acceso abierto: </strong>{ url }
                                    </p>
                            }
                        </div>
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl pb-2">Autores</h2>
                        {
                            autores.map((autor, index) =>
                                <div key={"autor-" + index} className="alert shadow-lg mb-4">
                                    <div className="flex-grow-0">
                                        <UserIcon className="flex-shrink-0 w-6 h-6" />
                                    </div>
                                    <div className="flex-grow">
                                        <strong>{autor.tipo}/a: </strong>
                                        {autor.nombre} {autor.primerApellido} {autor.segundoApellido}
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl pb-2">Temática</h2>
                        {
                            tematicas.map((tematica, index) =>
                                <div key={'tematica-'+index} className="badge badge-info gap-3 mr-2">
                                    <span className="text-lg mt-3 mb-4 text-base-100">{ tematica }</span>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl pb-2">Formatos</h2>
                        {
                            formatos.map((formato, index) =>
                                <div key={index} className="alert shadow-lg mb-4">
                                    <div className="flex-grow-0">
                                        <BookOpenIcon className="flex-shrink-0 w-6 h-6" />
                                    </div>
                                    <div className="flex-grow">
                                        <span>
                                            <strong className='pl-3 pr-1'>ISBN-13:</strong>{formato.isbn13 ? formato.isbn13 : '-'}
                                            <strong className='pl-3 pr-1'>ISBN-10:</strong>{formato.isbn10 ? formato.isbn10 : '-'}
                                            <strong className='pl-3 pr-1'>núm. págs:</strong> {formato.numPag ? formato.numPag : '-'}
                                            <strong className='pl-3 pr-1'>formato:</strong> {formato.formato ? formato.formato : '-'}
                                            <strong className='pl-3 pr-1'>precio:</strong> {formato.precioEur ? formato.precioEur : '-'} € / {formato.precioUsa ? formato.precioUsa : '-'} $
                                        </span>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl pb-2">Descripción</h2>
                        <div dangerouslySetInnerHTML={createMarkupDescripcion()} /> 
                    </div>
                    <div className="mt-8">
                        <h2 className="text-xl pb-2">Índice</h2>
                        <div dangerouslySetInnerHTML={createMarkupIndice()} />
                    </div>
                    <div className="modal-action">
                        <label htmlFor="modal-form-nb-1" className="btn btn-secondary">Modificar</label>
                        <button type="submit" className="btn btn-primary" onClick={(e)=>openNextModal(e)}>
                            Confirmar
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ModalNovedadBibliograficaStep1
