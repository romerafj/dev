import { useState } from 'react'
import { DocumentPlusIcon } from '@heroicons/react/24/outline';
import { DocumentMinusIcon } from '@heroicons/react/24/outline';

function FormNovedadBibliograficaFormato({ formatos, setFormatos }) {

  const [inputFields, setInputFields] = useState([
    {
      isbn13: '',
      isbn10: '',
      formato: '',
      numPag: 0,
      urlCompraElectronica: '',
      precioEur: 0.00,
      precioUsa: 0.00,
    }
  ])

  const tiposFormato = [
    "Libro impreso",
    "eBook",
    "PDF",
    "eBook / PDF"
  ]
  const convertToIsbn13 = (input) => {
    //9781566199094 -> 978-1-56619-909-4
    if(input.length===13 && input.indexOf('-')===-1){
      let part_1 = input.substr(0,3);
      let part_2 = input.substr(3,1);
      let part_3 = input.substr(4,5);
      let part_4 = input.substr(9,3);
      let part_5 = input.substr(12,1);
      return (part_1 + "-" + part_2 + "-" + part_3 + "-" + part_4 + "-" + part_5);
    }
    return input;
  }

  const convertToIsbn10 = (input) => {
    // 1566199093 -> 1-56619-909-3
    if(input.length===10 && input.indexOf('-')===-1){
      let part_1 = input.substr(0,1);
      let part_2 = input.substr(1,5);
      let part_3 = input.substr(6,3);
      let part_4 = input.substr(9,1);
      return (part_1 + "-" + part_2 + "-" + part_3 + "-" + part_4);
    }
    return input;
  }

  const handleFormChange = (index, e) => {
    let data = [...inputFields];
    if(e.target.name==='isbn13'){
      data[index][e.target.name] = convertToIsbn13(e.target.value)
    } else if(e.target.name==='isbn10'){
      data[index][e.target.name] = convertToIsbn10(e.target.value)
    } else {
      data[index][e.target.name] = e.target.value;
    }
    setInputFields(data);
    setFormatos(data);
  }

  const addFields = (e) => {
    e.preventDefault()
    let newfield = {
      isbn13: '',
      isbn10: '',
      formato: '',
      numPag: 0,
      urlCompraElectronica: '',
      precioEur: 0.00,
      precioUsa: 0.00,
    }
    setInputFields([...inputFields, newfield])
  }

  const removeField = (e) => {
    e.preventDefault()
    let data = [...inputFields];
    data.splice(1, 1)
    setInputFields(data)
  }

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
      <legend className="text-secondary bg-base-100 p-6 pt-3">Formatos de edición</legend>
      {
        inputFields.map((input, index) => {
          return (
            <div key={index}>
              <h3 className="text-l font-normal leading-normal mt-3 mb-4 text-cyan-800">
                Formato #{index + 1}
              </h3>
              <p className="text-sm text-base-700 mb-4 required">
                ISBN (Rellene al menos alguno de los campos)
              </p>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="isbn13"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    ISBN-13
                  </label>
                  <input
                    type="text"
                    id="isbn13"
                    name="isbn13"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="978-1-56619-909-4"
                    value={inputFields[index].isbn13}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="isbn10"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    ISBN-10 (antiguo)
                  </label>
                  <input
                    type="text"
                    id="isbn10"
                    name="isbn10"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="1-56619-909-3"
                    value={inputFields[index].isbn10}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="formato"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
                  >
                    Elija un formato
                  </label>
                  <select
                    className="select select-bordered w-full max-w-lg"
                    name="formato"
                    value={inputFields[index].formato}
                    onChange={e => handleFormChange(index, e)}
                  >
                    <option value="" disabled>Formato de la obra</option>
                    {tiposFormato.map((tipoFormato, index) => (
                      <option key={"tipo-formato-" + index} value={tipoFormato}>
                        {tipoFormato}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="numPag"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
                  >
                    Número de págs.
                  </label>
                  <input
                    type="number"
                    id="numPag"
                    name="numPag"
                    className="w-24 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="100"
                    value={inputFields[index].numPag}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
                <div className="col-span-2 mb-6">
                  <label
                    htmlFor="url-compra-electronica"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    URL de compra electrónica
                  </label>
                  <input
                    type="text"
                    id="urlCompraElectronica"
                    name="urlCompraElectronica"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="https:/web.com/libro.pdf"
                    value={inputFields[index].urlCompraElectronica}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-base-700 required">
                    Especifique un precio en al menos una de las siguientes monedas
                  </p>
                </div>
                <div>
                  <div className="form-control">
                    <label
                      htmlFor="precioEur"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Precio: en euros
                    </label>
                    <label className="input-group flex items-center select-none">
                      <input
                        type="number"
                        step="any"
                        id="precioEur"
                        name="precioEur"
                        placeholder="0.01"
                        className="input input-bordered w-32"
                        value={inputFields[index].precioEur}
                        onChange={e => handleFormChange(index, e)}
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label
                      htmlFor="precioUsa"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                    >
                      Precio: en dólares
                    </label>
                    <label className="input-group flex items-center select-none">
                      <input
                        type="number"
                        step="any"
                        id="precioUsa"
                        name="precioUsa"
                        placeholder="0.01"
                        className="input input-bordered w-32"
                        value={inputFields[index].precioUsa}
                        onChange={e => handleFormChange(index, e)}
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )
        })
      }
      <div className="mb-6 pt-5">
        {
          inputFields.length<2 
            ?
              <button
                className="btn btn-outline btn-secondary"
                onClick={e => addFields(e)}
              >
                <DocumentPlusIcon className="flex-shrink-0 w-6 h-6 mr-2"  />Añadir formato de edición
              </button>
            :
              <button
                className="btn btn-outline btn-accent ml-3"
                onClick={e => removeField(e)}
              >
                <DocumentMinusIcon className="flex-shrink-0 w-6 h-6 mr-2"  />Eliminar formato de edición
              </button>
        }
      </div>
    </fieldset>
  );
}

export default FormNovedadBibliograficaFormato;
