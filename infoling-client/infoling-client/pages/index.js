import Head from 'next/head'
import Hero from '../components/site/hero'
import Colaboradores from '../components/site/colaboradores'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Infoling - Información global sobre lingüística hispánica</title>
        <meta name="description" content="Portal de lingüística hispánica" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Colaboradores />
    </div>
  )
}
