import imgCloud from '../../../public/imagem_cloud_computer.png'
import Image from 'next/image'
import styles from './Hero.module.css' 


export default function Hero() {
  return (
   <div className='container' id='containerhero'>
    <div className='row'>
      <div className='col'>
        <Image src={imgCloud} alt='Cloud computer' className='img-fluid' id='imgCloud'/>
      </div>
      <div className='col'>
        <h2 className={styles.title}>Aproveite ao máximo a nuvem</h2>
        <p>Através dos cursos da Academia da nuvem poderá tirar o máximo proveito</p>
      </div>
    </div>
   </div>
  )
}
