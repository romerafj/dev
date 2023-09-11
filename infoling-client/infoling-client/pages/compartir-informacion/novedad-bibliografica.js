import { useState } from 'react'
import axios from "axios"
import { toast } from 'react-toastify'
import { ThreeDots } from 'react-loader-spinner';
import Container from '../../components/layout/container';
import Heading from '../../components/site/heading';
import FormNovedadBibliografica from '../../components/novedadBibliografica/formNovedadBibliografica';

function CompartirNovedadBibliografica() {

    const titulo = "Novedad bibliográfica"
    const subtitulos = ["Lorem ipsum..."]

    return (
        <div className='bg-base-200 pb-8'>
            <Heading titulo={titulo} subtitulos={subtitulos} />
            <Container>
                <FormNovedadBibliografica />
            </Container>
        </div>
    )
}

export default CompartirNovedadBibliografica