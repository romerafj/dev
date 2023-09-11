import { useState } from "react";

function FormNovedadBibliograficaImagen({ imagenes, setImagenes }) {

  const [file, setFile] = useState();
  
  const onFileChange = (e) => {
    setImagenes(e.target.files[0]);
    if(e.target.files[0]){
      setFile(URL.createObjectURL(e.target.files[0]));
    } else {
      setFile('');
    }
  }

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
        <legend className="text-secondary bg-base-100 p-6 pt-3 required">Imágenes</legend>
        <div className="mb-6">
        <input type="file" className="file-input w-full max-w-xs" onChange={(e) => onFileChange(e)} />
        </div>
        <div className="avatar">
          <div className="w-32 rounded">
            {
              file && <img src={file} />
            }
          </div>
        </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaImagen;
