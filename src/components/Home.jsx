import React from 'react';
import Typed from 'react-typed'
const Home =()=>{
    return(
        <>
          <header id="home" className="pt-5 pb-5 mt-0 align-items-center home-container">
    <div className="container-fluid mt-5">
      <div className="row justify-content-start align-items-center text-center h-100">
        <div className="col-md-12 col-md-8 h-50">
          <div className="intro-container">
            <h1 className="display-3 mb-2 mt-4">Vero Flores</h1>
            <Typed
              className="subtitle-home"
              strings={[
                  "Front-end Developer","Administradora de Negocios Internacionales",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              />
          </div>
        </div>
      </div>
    </div>
  </header>
        </>
    )

};
export default Home;