import React from 'react';

import './style.css'

const CounterSection = (props) => {

    return(
        <div className={`wpo-counter-area ${props.subclass??""}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="wpo-counter-content">
                            <h2>Interesed in Hauling?</h2>
                            <p>Send an email to carriers@freight-tec.com and include the following:</p>
                            <span>DOT #</span>
                            <span>Company Name</span>
                            <span>Copy of insurance</span>
                            <div className="btns">
                            <p>Or click here</p>
                                <div className="btn-style btn-style-3">
                                    <a className="link-carrier" to="https://www.mycarrierpackets.com/">Click here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="wpo-counter-grids">
                            <div className="grid">
                                <div>
                                    <h2><span>4,012</span></h2>
                                </div>
                                <p>Delivered Packages</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>605</span></h2>
                                </div>
                                <p>Countries Covered</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>920</span></h2>
                                </div>
                                <p>Satisfied Clients</p>
                            </div>
                            <div className="grid">
                                <div>
                                    <h2><span>3,592</span></h2>
                                </div>
                                <p>Tons of Goods</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default CounterSection;
