import Head from 'next/head'
import Link from 'next/link'
import Heading from '../../components/site/heading';
import Container from '../../components/container';

function Legal() {

  const titulo = "Términos y condiciones"
  const subtitulos = ["Lorem ipsum..."] 

  return (
    <div className='bg-base-200 pb-8'>
        <Heading titulo={titulo} subtitulos={subtitulos} />
        <Container>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sed fugiat illum rem aperiam placeat sint sapiente quis reprehenderit quae eius ex doloremque ipsa laudantium rerum dolor eaque, iste ad.</p>
            <p>Modi tempora exercitationem voluptates aliquid illo cum est debitis commodi reprehenderit minus sit natus temporibus sed ducimus explicabo id quo, atque nam mollitia quibusdam placeat. Eaque ut quas perferendis expedita?</p>
            <p>Voluptate cupiditate ducimus nihil explicabo, incidunt debitis adipisci nesciunt placeat. Soluta, at voluptatibus? Ipsum libero quisquam, odit optio adipisci temporibus fugit pariatur? Maxime, vitae soluta laborum fuga corporis nihil eius!</p>
        </Container>
    </div>
  )
}

export default Legal