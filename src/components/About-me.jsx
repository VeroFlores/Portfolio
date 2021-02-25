import React from 'react';
import photo from '../assets/images/profile.PNG';
import curriculum from '../assets/dowload/VeroFloresCV.pdf';

const AboutMe =()=>{
    return(

          <div id="about-me" className="container mt-5">
            <div class="row">
                <div class="col-md-12">
                    <h2 className="text-center title-section line pt-5">Sobre mí</h2>
                </div>
            </div>
          <div className="row align-items-center">
            <div className="col-lg-6 order-lg-1">
              <div className="p-3 d-flex justify-content-center">
                <img className="img-fluid image" src={photo} alt="profile"/>
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="p-3">
                <p className="text-justify">
                Soy front-End developer con background en Negocios Internacionales. Durante la universidad participé en incubadoras de negocios en las que desarrollé modelos de negocio que tenían como propuesta de valor la tecnología.Esta experiencia y posteriormente la laboral me llevaron a interesarme por la tecnología y en especial el desarrollo web.
                Algo que me encanta de ser FrontEnd es que puedo crear productos funcionales a través del código y que son capaces de resolver necesidades de usuarios.Además que hay un mundo de herramientas y tecnologías por aprender , lo cual me motiva a continuar en un proceso de aprendizaje constante.
                Como developer, aspiro a ser parte del desarollo de productos tecnológicos escalables y que tengan un impacto positivo en los usuarios tanto en un aspecto social o de mejora en su interacción con una plataforma web.
                </p>
    
                <div className="col-lg-12 d-flex justify-content-center">
                  <a href={curriculum} download="VeroFloresCV">
                    <button className="btn btn-outline-secondary mt-2"> Descargar CV</button>
                  </a>
                </div>
    
              </div>
            </div>
          </div>
        </div>
    )

};
export default AboutMe;