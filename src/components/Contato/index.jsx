import React from 'react'

export default function Contato() {
  return (
        <>
          <section className="py-4 py-xl-5" id='containerContatos'>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-8 col-xl-6 text-center mx-auto">
                        <h2>Entre em contato</h2>
                        <p>Curae hendrerit donec commodo hendrerit egestas tempus, turpis facilisis nostra nunc. Vestibulum dui eget ultrices.</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    <div className="col-md-6 col-lg-4 col-xl-4">
                        <div className="d-flex flex-column justify-content-center align-items-start h-100" id='redessociais'>
                            <div className="d-flex align-items-center p-3">
                                <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                                    <a href="https://www.linkedin.com/company/academiadanuvem/"><i className="bi bi-linkedin"></i></a>
                                    </div>
                                <div className="px-2">
                                   
                                    <h6 className="mb-0">linkedin</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center p-3">
                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                                    <a href="https://www.linkedin.com/company/academiadanuvem/"><i className="bi bi-facebook"></i></a>
                                    </div>
                                <div className="px-2">
                                   
                                    <h6 className="mb-0">facebook</h6>
                                </div>
                            </div>
                            <div className="d-flex align-items-center p-3">
                            <div className="bs-icon-md bs-icon-rounded bs-icon-primary d-flex flex-shrink-0 justify-content-center align-items-center d-inline-block bs-icon">
                                    <a href="https://www.linkedin.com/company/academiadanuvem/"><i className="bi bi-youtube"></i></a>
                                    </div>
                                <div className="px-2">
                                   
                                    <h6 className="mb-0">youtube</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5 col-xl-4">
                        <div>
                            <form className="p-3 p-xl-4" method="post">
                                <div className="mb-3"><input className="form-control" type="text" id="name-1" name="name" placeholder="Nome"/></div>
                                <div className="mb-3"><input className="form-control" type="email" id="email-1" name="email" placeholder="Email"/></div>
                                <div className="mb-3"><textarea className="form-control" id="message-1" name="message" rows="6" placeholder="Mensagem"></textarea></div>
                                <div><button className="btn btn-primary d-block w-100" type="submit">Enviar </button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}
