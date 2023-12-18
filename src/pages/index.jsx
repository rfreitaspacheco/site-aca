
import Header from '../components/Header'
import Hero from '../components/Hero'
import Cursos from '../components/Cursos'
import Numeros from '../components/Numeros'
import Testimonial from '../components/Testimonial'
import Contato from '../components/Contato'
import Footer from '../components/Footer'
import {getPrismicClient} from '../services/prismic'
import Prismic from '@prismicio/client'
import {RichText} from 'prismic-dom'


export default function Home({cursos}) {
  return (
    <>
      <Header/>
      <Hero />
      <Cursos dados={cursos}/>
      <Numeros/>
      <Testimonial/>
      <Contato />
      <Footer/>
    </>
    
    
  )
}

export const getStaticProps = async () =>{
  const prismic = getPrismicClient();

  const response = await prismic.query([
    Prismic.Predicates.at('document.type','cursos')
  ])

  const cursos = response.results.map(curso =>{
    return {
      slug: curso.uid,
      title: RichText.asText(curso.data.title),
      subtitle: RichText.asText(curso.data.subtitle),
      link: curso.data.link_curso,
      qtaulas: RichText.asText(curso.data.qt_aulas),
      preco: RichText.asText(curso.data.preco),
      imagem: curso.data.imagem_curso.url
    }
  })



  return{
    props:{
      cursos
    }
  }
}