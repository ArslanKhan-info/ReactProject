/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import {getServices} from '../store/index'
import ServiceItem from '../components/Service/ServiceItem/ServiceItem'
import Hero from '../components/Hero'
class Home extends React.Component {
    state={
        services:[]
    }
    componentDidMount(){
        const services = getServices();
        this.setState({services:services})
    }
    
    renderServices=(x)=> x.map(service=> <ServiceItem service={service} key={service.id}/>)




  render() {
     const {services} = this.state
    return (
      <div>
        
        <Hero/>
        

        <section className="section section-feature-grey is-medium">
          <div className="container">
            <div className="title-wrapper has-text-centered">
              <h2 className="title is-2">Great Power Comes </h2>
              <h3 className="subtitle is-5 is-muted">With great Responsability</h3>
              <div className="divider is-centered"></div>
            </div>

            <div className="content-wrapper">
              <div className="columns">
                {this.renderServices(services)}
                  {/* USING MAP FUNCTION HERE  */}
                {/* { services.map(service=>
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
                } */}
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home