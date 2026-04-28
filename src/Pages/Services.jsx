import "./Services.css";
import { useState } from "react";
import { service as defaultService } from "../utils/Dummydata";
import nurse from "../assets/nurse.png"
import covid from "../assets/covid.png"
import supplement from "../assets/supplement.png"
import flask from "../assets/flask.png"
import schedule from "../assets/schedule.png"




export default function Services({
    data
}) {
    const [centerIndex, setCenterIndex] = useState(1);
    const items = data ?? defaultService;
    return (
        <section className="services-section">
            <h1>Our 
                <span> Main Services</span> <br />
                 Categories
            </h1>
            <div className="services-container">
                {items.map((item, index) => (
                    <div
                        key={item.id}
                        className={index === centerIndex ? "service-item active" : "service-item"}
                        onClick={() => setCenterIndex(index)}
                    >
                        <img src={item.img} alt={item.title} className="service-img" />
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>


            <div className="special-services">
                <div className="left-img">
                    <img src={nurse} alt="medicine" className="medicine-img" />
                </div>
                <div className="service-content">
                    <h1>Our 
                        <span> Special Services</span>
                    </h1>

                    <p>
                        In times like today, your health is very important,
                        especially since the number of COVID-19 cases is
                        increasing day by day, so we are ready to help you
                        with your health consultation.
                    </p>

                    <div className="service-test">
                        <div className="service-box">
                            <div className="serv-icon">
                            <img src={covid} alt="Covid-19 Test" />
                            </div>
                            <h3>Covid-19 Test</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                        </div>
                        <div className="service-box">
                            <div className="serv-icon">
                            <img src={supplement} alt="Covid-19 Test" />
                            </div>
                            <h3>Covid-19 Test</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                        </div>

                        <div className="service-box">
                            <div className="serv-icon">
                            <img src={flask} alt="Covid-19 Test" />
                            </div>
                            <h3>Covid-19 Test</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                        </div>

                        <div className="service-box">
                            <div className="serv-icon">
                            <img src={schedule} alt="Covid-19 Test" />
                            </div>
                            <h3>Covid-19 Test</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare tellus malesuada odio blandit. Sit duis eu nisi habitant lorem egestas. </p>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
    );
}