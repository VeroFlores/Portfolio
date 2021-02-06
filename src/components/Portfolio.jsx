import React from 'react';
import Projects from '../data/projects.json';

const Portfolio =()=>{
    console.log(Projects.projects);
    return(
        <div  className="bg-container">
            <div class="container mt-3">
            <div class="col-md-12 pt-4">
                <h2 className="text-center title-section line">Proyectos</h2>
            </div>
            <div className="row">
            {Projects.projects.map((order,index)=>(
            <div key={'m'+index} className="col-lg-4 col-sm-6 mt-4">
                    <h4 className="text-center md-title">{order.title}</h4>
                    <div className="card">    
                        <img className="card-img-top screen mt-3 size" src={order.img}
                            alt={order.title}/>
                        <div className="card-body">
                            <p className="card-text">{order.description}</p>
                            <div className="card-text">{
                                order.herramientas.map((tool,index)=>(  
                                    <span key={"n"+index}className="tags-tool">{tool}</span>
                            ))
                            }
                            </div>
                            <div className="text-center">
                                <a href={order.link} class="btn btn-outline-secondary mt-2">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
            </div>
            </div>


    </div>
        
    )

};
export default Portfolio;