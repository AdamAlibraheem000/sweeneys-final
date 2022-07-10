import React from "react";
import spinner from '../../src/imgs/spinner.gif'

const FeatureList = ({ features }) => {

    return (
        <section className='feature-grid'>
            <div className="feature-title">
                <h1 >Dinner Features</h1>
            </div>
            <div>
       {!features.length ? (
       <img src={spinner} alt="loading"/>
       ) : (
        features.map((feature, key) => (
        <div className="feature-food-div" key={key}>
        <h1 className="feature-food-title" >{feature.title}</h1>
        <p className="feature-food-desc" >{feature.desc}</p>
        <p className="feature-food-desc">
            {feature.price}
        </p>
        </div>
    )))}  
    </div>
        </section>
    )
}

export default FeatureList;