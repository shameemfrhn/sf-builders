import React from "react";
import './Home.css';
import Header from "./Header";



const Home = () => {
    return (
        <div className="full">
            <Header/>

        <div className="container">
           
            {/* Left side */}
            <div className="home-left-side">
                <p>We provide quality construction for every project</p>
                <h1>
                    Giving Awesome Building <br />Ideas Fresh Start 
                </h1>
                <p>We are a full-service building company that specializes in new construction, 
                    renovations, and repairs. We have a team of experienced and qualified professionals who are dedicated 
                    to providing our clients with the highest quality services. We are committed to meeting our clients' 
                    needs and exceeding their expectations.
                     We are confident that we can provide you with the best possible building experience.</p>
                <button>Show more</button>
                
            </div>

            {/* Right side */}
            <div className="right-side">
                
                
            </div>
        </div>
        </div>

    );
};

export default Home;

