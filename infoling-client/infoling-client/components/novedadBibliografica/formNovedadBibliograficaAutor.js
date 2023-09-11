import { useState } from 'react'
import { UserPlusIcon } from '@heroicons/react/24/outline';
import { UserMinusIcon } from '@heroicons/react/24/outline';

function FormNovedadBibliograficaAutor({ autores, setAutores }) {

  const [inputFields, setInputFields] = useState([
    {
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      tipo: ''
    }
  ])

  const handleFormChange = (index, e) => {
    e.preventDefault()
    let data = [...inputFields];
    if(e.target.name.startsWith('tipo-')){
      data[index]['tipo'] = e.target.value;
    } else {
      data[index][e.target.name] = e.target.value;
    }
    setInputFields(data);
    setAutores(data);
  }

  const addFields = (e) => {
    e.preventDefault()
    let newfield = { 
      nombre: '',
      primerApellido: '',
      segundoApellido: '',
      tipo: ''
    }
    setInputFields([...inputFields, newfield])
  }

  const removeFields = (index, e) => {
    e.preventDefault()
    let data = [...inputFields];
    data.splice(index, 1)
    setInputFields(data)
  }

  const handleTipoAutor = (event) => {
    setTipo(event.target.value)
  }

  return (
    <fieldset className="border border-solid border-gray-300 p-5 mb-10 bg-base-100">
      <legend className="text-secondary bg-base-100 p-6 pt-3">Datos de los autores/as</legend>
      {
        inputFields.map((input, index) => {
          return (
            <div key={"autor-"+index}>
              <h3 className="text-l font-normal leading-normal mt-3 mb-4 text-cyan-800">
                Datos del autor/a #{index+1}
              </h3>
              <div className="grid gap-6 mb-6 md:grid-cols-4">
                <div className="col-span-2">
                  <label
                    htmlFor="nombre"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
                  >
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="nombre"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Miguel"
                    value={input.nombre}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="primerApellido"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
                  >
                    Primer apeliido
                  </label>
                  <input
                    type="text"
                    name="primerApellido"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="de Cervantes"
                    value={input.primerApellido}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
                <div>
                  <label
                    htmlFor="segundoApellido"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Segundo apeliido
                  </label>
                  <input
                    type="text"
                    name="segundoApellido"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Saavedra"
                    value={input.segundoApellido}
                    onChange={e => handleFormChange(index, e)}
                  />
                </div>
              </div>
              <div className="grid gap-6 mb-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="tipo-autor"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 required"
                  >
                    Selecciones una de las siguientes cuatro opciones:
                  </label>
                  <input
                    type="radio"
                    id={"tipo-autor-" + index }
                    name={"tipo-autor-" + index }
                    className="radio pr-2"
                    value="autor"
                    checked={input.tipo==="autor"}
                    onChange={e => handleFormChange(index, e)}
                  />
                  <label htmlFor="tipo-autor" className="ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Autor/a</label>
                  <input 
                    type="radio" 
                    id={"tipo-editor-" + index }
                    name={"tipo-editor-" + index }
                    className="radio" 
                    value="editor" 
                    checked={inputFields[index].tipo === 'editor'} 
                    onChange={e => handleFormChange(index, e)} 
                  />
                  <label htmlFor="tipo-editor" className="ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Editor/a</label>
                  <input 
                    type="radio"
                    id={"tipo-director-" + index }
                    name={"tipo-director-" + index } 
                    className="radio" 
                    value="director" 
                    checked={inputFields[index].tipo === 'director'} 
                    onChange={e => handleFormChange(index, e)} 
                  />
                  <label htmlFor="tipo-director" className="ml-2 mr-4 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Director/a</label>
                  <input 
                    type="radio" 
                    id={"tipo-coordinador-" + index }
                    name={"tipo-coordinador-" + index }
                    className="radio"
                    value="coordinador"
                    checked={inputFields[index].tipo === 'coordinador'}                  onChange={event => handleFormChange(index, event)} 
                  />
                  <label htmlFor="tipo-coordinador" className="ml-2 mr-4 text-sm font-medium text-gray-900 dark:text-gray-300">Coordinador/a</label>
                </div>
                <div>
                <button
                  className="btn btn-outline btn-accent"
                  disabled={index===0}
                  onClick={(e) => removeFields(index, e)}
                >
                  <UserMinusIcon className="flex-shrink-0 w-6 h-6 mr-2" />Eliminar autor/a
                </button>
                </div>
              </div>
            </div>
          
      
          )
        })
      }
      <div className="mb-6 pt-5">
        <button
          className="btn btn-outline btn-secondary"
          disabled={!inputFields[inputFields.length-1].nombre || !inputFields[inputFields.length-1].primerApellido || !inputFields[inputFields.length-1].tipo || inputFields.length>=8}
          onClick={(e) => addFields(e)}
        >
          <UserPlusIcon className="flex-shrink-0 w-6 h-6 mr-2"  />Añadir autor/a
        </button>
      </div>
    </fieldset >
  );
}

export default FormNovedadBibliograficaAutor;
