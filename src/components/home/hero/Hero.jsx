import React from 'react'
import Title from '../../common/title/Title'
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className="container">
                <div className="row">
                  <Title subtitle='WELCOME TO ACDAEMIA' title='Best Online Education' />
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid incidunt placeat maiores nemo possimus dolores, doloremque aut delectus, ad repellendus deleniti ullam alias fugit? In officiis explicabo quam? Sequi, ut.</p>
                        <div className="button">
                                <button className="primary-btn">GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i></button>
                                <button>VIEW COURSE <i className='fa fa-long-arrow-alt-right'></i></button>
                        </div>
                </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}

export default Hero
