import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/site/heading';
import Container from '../../components/layout/container';

export default function CompartirInformacion() {

    const titulo = "Compartir información"
    const subtitulos = ["Seleccione el formulario correspondiente al tipo de información que de desea compartir en Infoling"]

    return (
        <div className='bg-base-200 pb-8'>
            <Head>
                <title>Infoling - Compartir información sobre lingüística hispánica</title>
                <meta name="description" content="Portal de lingüística hispánica" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Heading titulo={titulo} subtitulos={subtitulos}></Heading>
            <Container>
                <div className="flex flex-wrap">
                    <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title">Libro</h2>
                                <p>Novedad bibliografica</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary">
                                        <Link href="/compartir-informacion/novedad-bibliografica">Compartir</Link>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div >
    )
}
