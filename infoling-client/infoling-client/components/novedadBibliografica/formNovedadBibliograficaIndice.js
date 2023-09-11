import { useState, useEffect } from "react";
import WYSIWYGEditor from '../site/wysiwyg';


function FormNovedadBibliograficaIndice({ indice, setIndice }) {

  const [htmlIndice, setHtmlIndice] = useState("");

  useEffect(() => {
    if(htmlIndice!==""){
      setIndice(htmlIndice)
    }
  }, [htmlIndice]);

  
  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3 required">Índice</legend>
        <div className="mb-6">
        <WYSIWYGEditor setContent={setHtmlIndice} />
          <ul className='text-left text-xs leading-6 text-zinc-500 mt-4 mb-8'>
            <li>(1) <strong>Elimine los números de página, los puntos suspensivos, los tabuladores y/o los indentados</strong>.</li>
            <li>(2) <strong>No escriba los subcapítulos en mayúsculas</strong>.</li>
            <li>(3) Si su publicación recoge una recopilación de contribuciones, <strong>NO ponga el nombre de los autores ni el título de sus contribuciones en mayúsculas</strong>: escriba p. ej., Amparo Alcina. Metodología y tecnologías para la elaboración de diccionarios terminológicos onomasiológicos, pero <strong>NO ponga</strong> AMPARO ALCINA. Metodología y tecnologías para la elaboración de diccionarios terminológicos onomasiológicos o Amparo Alcina. METODOLOGÍA Y TECNOLOGÍAS PARA LA ELABORACIÓN DE DICCIONARIOS TERMINOLÓGICOS ONOMASIOLÓGICOS.</li>
          </ul>
        </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaIndice;
