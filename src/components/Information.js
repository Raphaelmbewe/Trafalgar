import React from "react";
import './components.css';
import "bootstrap/dist/css/bootstrap.min.css";

export const About = () =>{
    return(
        <section className=" container-fluid">
            <h2 className="our-services-header">Our services</h2>
            <div className="line mt-4 "></div>
            <p className="Our-services-text text-secondary mt-4 mb-4 container text-left ">
                We provide the best choices for you. Adjust it to your health needs
                make sure you undergo treatment with our  highly qualified doctors you
                can consult with us which type of service is suitable for your health
            </p>
        </section>
    )
}