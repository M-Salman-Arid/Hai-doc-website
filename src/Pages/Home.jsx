import React from "react";
import "./Home.css";
import doctor from "../assets/doctor.png";
import mask from "../assets/mask.jpg";
import Slider from "../Components/ImageSlider/Slider";
import Services from "./Services";
import Getstarted from "../Components/Getstarted/Getstarted";
import { service } from "../utils/Dummydata.jsx";

export default function Home() {
    return (
        <>

            <section className="home-section">
                <div className="left-section">
                    <h1>We Are Ready to <br />
                        <span> Help Your Health </span> <br />
                        Problems
                    </h1>
                    <p>In times like today, your health is very important, especially since the number of COVID-19 cases is increasing day by day, so we are ready to help you with your health consultation</p>
                    <button className="home-btn">Try Free Consultation</button>

                    <div className="score">
                        <div className="score-item">
                            <h2>200
                                <span>+</span>
                            </h2>
                            <p>Active Doctor</p>
                        </div>
                        <div className="score-item">
                            <h2>15K
                                <span>+</span>
                            </h2>
                            <p>Active User</p>
                        </div>

                        <div className="score-item">
                            <h2>50
                                <span>+</span>
                            </h2>
                            <p>Active Pharmacy</p>
                        </div>
                    </div>
                </div>
                <div className="right-section">
                        <img src={doctor} alt="health" className="doctorimg" />
                </div>
            </section>

            <Slider />
            <Services data={service} />
            <Getstarted/>

        </>
    );
} 