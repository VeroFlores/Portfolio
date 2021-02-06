import React from 'react';

const Contact =()=>{
    return(
        <>
          <section className="bg-container pt-4">
            <div className="container mt-5">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <h2 className="title-section line">Contacto</h2>
                        <p>¿Te interesa mi trabajo?.Envíame un mensaje por estos medios:</p>
                    </div>
                </div>
            </div>
        <div className="container text-center">
            <div className="col-xs-12 mt-3">
                <div className="col-xs-5">
                    <a className="icons-contact" href="https://www.linkedin.com/in/veronicafloresc/">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <div className="col-xs-5 icons-text">
                    <p>@veronicafloresc</p>
                </div>
            </div>
            <div className="col-xs-12 mt-3">
                <div className="col-xs-5">
                    <a className="icons-contact" href="https://github.com/VeroFlores/">
                        <i className="fab fa-github-square"></i>
                    </a>
                </div>
                <div className="col-xs-5 icons-text">
                    <p>VeroFlores</p>
                </div>
            </div>
            <div className="col-xs-12 mt-3">
                <div className="col-xs-5">
                    <span className="icons-contact">
                        <i className="fas fa-envelope-square"></i>
                    </span>
                </div>
                <div className="col-xs-5 icons-text">
                    <p>veroflorescalla@gmail.com</p>
                </div>
            </div>
        </div>
  </section>
</>
)
};
export default Contact;