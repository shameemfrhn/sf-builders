import React from "react";
import './About.css'


const About = () => {
    return (
        <body>
            
        
        <div class="home-conatiner" >
            <h2 className="title">What We Provide Special</h2>
            <div className="card-cont">
                <div className="card">
                    <div className="box">

                    <h3>Interior design</h3>
                    <p>create and implement functional and aesthetic designs for interior spaces</p>

                    </div>
                </div>
                <div className="card">
                    <div className="box">

                    <h3>Budget Planning</h3>
                    <p>the act of creating and maintaining a budget, then using it to make strategic business decisions and guide organizational changes across various departments</p>

                    </div>
                </div>
                <div className="card">
                    <div className="box">

                    <h3>Project Planning</h3>
                    <p>involves the choice of technology, the definition of work tasks, the estimation of the required resources and durations for individual tasks</p>

                    </div>
                </div>
                <div className="card">
                    <div className="box">

                    <h3>Architecture service</h3>
                    <p>Architects are responsible for creating designs that meet the client's needs and incorporate the necessary elements required for a successful construction project</p>

                    </div>
                </div>

            </div>

        </div>

        </body>
    );
};

export default About;