import { useState, useEffect } from "react";
import WYSIWYGEditor from '../site/wysiwyg';

function FormNovedadBibliograficaDescripcion({ descripcion, setDescripcion }) {
  
  const [htmlDescripcion, setHtmlDescripcion] = useState("");

  useEffect(() => {
    if(htmlDescripcion!==""){
      setDescripcion(htmlDescripcion)
    }
  }, [htmlDescripcion]);

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3 required">Descripción</legend>
        <div className="mb-6">
          <WYSIWYGEditor setContent={setHtmlDescripcion} />
        </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaDescripcion;
