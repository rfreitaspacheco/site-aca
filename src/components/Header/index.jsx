import Image from 'next/image'
import logo from '../../../public/logo.svg'
import styles from './header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <header>
   
      <nav className="navbar navbar-dark navbar-expand-md py-1" id="navbar" >
        <div className="container" id="containerhead">
          <a className="navbar-brand d-flex align-items-center" id="linknavbar" >
            <Image className='img-fluid' src={logo} alt="Academia da Nuvem"></Image>
          </a>
          <span className={styles.logotitle}>Academia da Nuvem</span>
          <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-5">
            <span className="visually-hidden">Toggle navigation</span>
            <span className="navbar-toggler-icon"></span>
          </button>
            <div className="collapse navbar-collapse" id="navcol-5">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link href="/" legacyBehavior>
                      <a className={router.pathname == "/" ? "active" : ""}>
                        Home
                      </a>
                      </Link>
                    </li>
                    {/* <li className="nav-item"><a className="nav-link" href="#">Cursos Corporativos</a></li> */}
                    <li className="nav-item">
                      <Link href="/posts" legacyBehavior>
                        <a className={router.pathname == "/posts" ? "active" : ""}>
                          Conteúdos
                        </a>
                      </Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    </header>
  )
}
