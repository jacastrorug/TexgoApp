import React from 'react';

import './style.css'

const CustomersSection = (props) => {

    return(
        <div className={`wpo-counter-area ${props.subclass??""}`}>
            <div className="container padding-counter">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-sm-12">
                        <div className="wpo-counter-content">
                            <h2>Want your freight in good hands?</h2>
                            <p>Send an email to ghunt@texgotrans.com and include the following:</p>
                            <span>Company Name</span>
                            <span>Lane</span>
                            <span>Request a credit application</span>
                            <div className="btns">
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-sm-12">
                        <div className="wpo-counter-grids">
                            <div className="grid counter-carrier">
                                <div>
                                    <h2><span>237+</span></h2>
                                </div>
                                <p>Satisfied Clients</p>
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

export default CustomersSection;
