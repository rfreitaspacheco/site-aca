import React from 'react'
import styles from './post.module.css'
import Header from '../../components/Header'
import Image from 'next/image'

import { getPrismicClient} from '../../services/prismic'
import { RichText } from 'prismic-dom'

export default function Post({post}) {


  return (
    <>
      <Header />
      <main className={styles.container}>
        <article className={styles.post}>
        <Image
            src={post.cover}
            width={720}
            height={410}
            alt={post.title}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPpfDwACjQGCSvtZFQAAAABJRU5ErkJggg=="
          />
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div className={styles.postContent} dangerouslySetInnerHTML={{__html: post.description}}></div>
        </article>
      </main>
    </>
  )
}

export const getServerSideProps = async ({req, params}) =>{
  const {slug} = params

  const prismic = getPrismicClient(req)

  const response = await prismic.getByUID('post',String(slug), {})

  if(!response){
    return{
      redirect:{
        destination:'/posts',
        permanent: false
      }
    }
   }

 


   const post ={
    slug: slug,
    title: RichText.asText(response.data.title),
    description: RichText.asHtml(response.data.description),
    cover: response.data.cover.url,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR',{
      day:'2-digit',
      month: 'long',
      year: 'numeric'
    })
   }


  return {
    props:{
      post
    }
  }
}