/* eslint jsx-a11y/anchor-is-valid: 0 */


import React from 'react'

const ServiceItem =({service})=>{
    return(
            <div className="column" key={service.id}>
                <div className="feature-card is-bordered has-text-centered revealOnScroll delay-2" data-animation="fadeInLeft">
                    <div className="card-title">
                    <h4>{service.title}</h4>
                    </div>
                    <div className="card-icon">
                    <img src={service.image} alt=""/>
                    </div>
                    <div className="card-text">
                    <p>{service.description}</p>
                    </div>
                    <div className="card-action">
                    <a href="#" className="button btn-align-md secondary-btn raised">Get Started</a>
                    </div>
                </div>
            </div> 
    )
}
export default ServiceItem