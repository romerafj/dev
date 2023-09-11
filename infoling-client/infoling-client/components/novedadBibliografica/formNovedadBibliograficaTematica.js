import { useState } from "react";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { TrashIcon } from '@heroicons/react/24/outline'

function FormNovedadBibliograficaTematica({ tematicas, setTematicas }) {

    const [tematicaSelected, setTematicaSelected] = useState("");

    const handleChangeTematica = (e) => {
        setTematicaSelected(e.target.value);
    };

    const tiposTematica = [
        "Adquisición del español como lengua primera (L1)",
        "Alteraciones del lenguaje",
        "Análisis del discurso",
        "Antropología lingüística",
        "Ciencia cognitiva",
        "Español como lengua extranjera (ELE)",
        "Español como segunda lengua (EL2)",
        "Filosofía del lenguaje",
        "Fonética",
        "Fonología",
        "Historia de la lingüística, Historiografía lingüística",
        "Humanidades digitales",
        "Lengua de señas",
        "Lenguas indígenas o de fuerte tradición oral y/o transmisión comunitaria",
        "Lexicografía, Lexicología",
        "Lingüística cognitiva",
        "Lingüística computacional",
        "Lingüística de corpus",
        "Lingüística forense",
        "Lingüística histórica",
        "Lingüística románica",
        "Morfología",
        "Neurolingüística",
        "Otras especialidades",
        "Pragmática",
        "Psicolingüística",
        "Retórica",
        "Semántica",
        "Sintaxis",
        "Sociolingüística",
        "Técnicas de comunicación",
        "Teorías lingüísticas",
        "Terminología",
        "Tipología",
        "Traducción",
        "Variedades del español"
    ]

    return (
        <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
            <legend className="text-secondary bg-base-100 p-6 pt-3 required">Temática</legend>
            <div className="lg:flex lg:items-center pb-5">
                <select
                    className="select select-bordered w-full max-w-lg m-2"
                    onChange={handleChangeTematica}
                    value={tematicaSelected}
                >
                    <option value="" disabled>Seleccione al menos un tema tratado en la obra</option>
                    {tiposTematica.map((tipoTematica, index) => (
                        <option key={"tipo-tematica-" + index} value={tipoTematica}>
                            {tipoTematica}
                        </option>
                    ))}
                </select>
                <button
                    className="btn btn-outline btn-secondary"
                    disabled={!tematicaSelected}
                    onClick={(e) => {
                        e.preventDefault();
                        if (tematicaSelected) {
                            setTematicas([...tematicas, tematicaSelected]);
                            setTematicaSelected("");
                        }
                    }}
                >
                    <PlusCircleIcon className="flex-shrink-0 w-6 h-6 mr-2" /> Añadir temática
                </button>
            </div>
            <div className="lg:flex lg:justify-start">
                {
                    tematicas.map((item, index) =>
                        <div key={'tematica-' + index} className="badge badge-info gap-3 mr-2">
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    var array = [...tematicas];
                                    if (index !== -1) {
                                        array.splice(index, 1);
                                        setTematicas(array);
                                    }
                                }}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="text-base-100 inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                            </button>
                            <span className="text-lg mt-3 mb-4 text-base-100">{item}</span>
                        </div>
                    )
                }
            </div>
        </fieldset>
    );
}

export default FormNovedadBibliograficaTematica;
