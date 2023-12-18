import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container" >
            <div className="row">
                <div className="col-lg-6 text-center text-lg-start h-100" >
                    <ul className="list-inline mb-2">
                        <li className="list-inline-item"><a href="#">Home</a></li>
                        <li className="list-inline-item"><span>⋅</span></li>
                        <li className="list-inline-item"><a href="#">Sobre</a></li>
                        <li className="list-inline-item"><span>⋅</span></li>
                        <li className="list-inline-item"><a href="#">Cursos corporativos</a></li>
                        <li className="list-inline-item"><span>⋅</span></li>
                        {/* <li className="list-inline-item"><a href="#">Privacy Policy</a></li> */}
                    </ul>
                    <p className="small mb-4 mb-lg-0">© Brand 2023. Todos os direitos reservados à Academia da Nuvem.</p>
                </div>
                <div className="col-lg-6 text-center text-lg-end my-auto h-100">
                    <ul className="list-inline mb-0">
                        <li className="list-inline-item"><a href="#"><i className="fa fa-facebook fa-2x fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-twitter fa-2x fa-fw"></i></a></li>
                        <li className="list-inline-item"><a href="#"><i className="fa fa-instagram fa-2x fa-fw"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
    
    </>
  )
}
