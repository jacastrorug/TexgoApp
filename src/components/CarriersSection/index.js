import React from 'react';

import './style.css'

const CarriersSection = (props) => {

    return(
        <div className={`wpo-counter-area ${props.subclass??""}`}>
            <div className="container padding-counter">
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
                                    <a className="link-carrier" href="https://www.mycarrierpackets.com/0662ebd9-25df-416c-900d-fb4a68a8d71a/Carrier/Intellivite">Click here</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="wpo-counter-grids">
                            <div className="grid counter-carrier">
                                <div>
                                    <h2><span>17,000+</span></h2>
                                </div>
                                <p>Number of Carriers</p>
                            </div>
                            <div className="grid counter-carrier">
                                <div>
                                    <h2><span>100,000+</span></h2>
                                </div>
                                <p>Loads Shipped</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     )
        
}

export default CarriersSection;
