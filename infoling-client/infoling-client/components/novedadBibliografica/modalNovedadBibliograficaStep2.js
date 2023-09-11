import {useState} from 'react'
import { ThreeDots } from "react-loader-spinner";

function ModalNovedadBibliograficaStep2({loading, setSaveForm}) {
   
    const [terms, setTerms] = useState(false)

    const submitForm = async (e) => {
        e.preventDefault()
        setSaveForm(true)
    }

    const closeModal = async (e) => {
        e.preventDefault()
        document.getElementById('modal-form-nb-1').checked = true;
        document.getElementById('modal-form-nb-2').checked = false;
        document.getElementById('modal-form-nb-3').checked = false;
    }

    const handleChangeTerms = () => {
        setTerms(!terms);
    };

    return (
        <>
            <input type="checkbox" id="modal-form-nb-2" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="font-bold text-lg pb-12">Condiciones de envío</h3>
                    <div className="p-6">
                        <p>
                            Para poder anunciar una publicación en Infoling, es imprescindible mandar un ejemplar de dicha publicación a la redacción de Infoling.
                        </p>
                        <div className="my-8">
                            <label className="inline-flex relative items-center cursor-pointer">
                            <input
                                type="checkbox"
                                value={terms}
                                className="sr-only peer"
                                id="terms"
                                name="terms"
                                checked={terms}
                                onChange={handleChangeTerms}
                            />
                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                            <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">¿Acepta Vd. enviar un ejemplar a la redacción de Infoling, concretamente, a la siguiente dirección?:</span>
                            </label>
                        </div>
                        <p>Carlos Subirats / Infoling<br/>
                            Universidad Autónoma de Barcelona<br/>
                            Facultad de Letras, Edificio B<br/>
                            Dept. Filología Española<br/>
                            08193 Bellaterra</p>
                    </div>
                    <div className="modal-action">
                        <button className="btn btn-secondary" onClick={(e)=>closeModal(e)}>
                            Atrás
                        </button>
                        <button className="btn btn-primary" disabled={!terms} onClick={(e)=>submitForm(e)}>
                            {loading ? (
                            <ThreeDots
                                height="25"
                                width="40"
                                color="#fff"
                                ariaLabel="three-dots-loading"
                            />
                            ) : (
                            "Enviar novedad bibliográfica"
                            )}
                        </button>
                    </div>

                </div>
            </div>
        </>
    )
}

export default ModalNovedadBibliograficaStep2
