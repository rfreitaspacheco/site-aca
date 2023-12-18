import imgOffice365 from '../../../public/curso_office365.svg'
import Imagen from 'next/image'
import React from 'react'
import styles from './cursos.module.css'


export default function index({dados}) {
  
  return (
    <div className="container" id='containercursos'>
      <div className="row text-center">
        <h1 className={styles.text}>Nossos cursos on-line</h1>
      </div>
      
      <div className="row" id="containerdadoscursos">

        {dados.map(curso => (
          (
            <>
              <div key={curso.slug} className="col" id="cardcursos" >
                <div  className="card" >
                  <Imagen 
                    src={curso.imagem}
                    className="card-img-top img-fluid" 
                    alt={curso.title}
                    width={750}
                    height={422}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPpfDwACjQGCSvtZFQAAAABJRU5ErkJggg=="
                  />
                  <div className="card-body">
                    <h5 className="card-title" id="cardtitle">{curso.title}</h5>
                    <p className="card-text" id="cardtext">{curso.subtitle}</p>
                    <p className="card-text">Quantidade de aulas: {curso.qtaulas}</p>
                    <div className={styles.cardFooter}>
                      <span >
                        <a href={curso.link.url} className="btn btn-primary">Matricule-se</a>
                      </span>
                      <span className={styles.cardItem}>
                        {curso.preco}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )
        ))}

  </div>
    <div className='row' id='botton'>

    </div>
</div>
  )
}


