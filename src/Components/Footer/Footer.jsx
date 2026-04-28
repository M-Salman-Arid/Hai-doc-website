import "./Footer.css";
import { NavLink } from "react-router-dom";


export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    <h1>Tutorify</h1>
                    <p>Learn more than just a language</p>
                    <div className="social-icons">
                        <img src="" alt="Google" />
                        <img src="" alt="twitter" />
                        <img src="" alt="Instagram" />
                        <img src="" alt="LinkedIn" />
                    </div>
                </div>

                    <div className="footer-container">
                    <h2>Find Teacher</h2>
                    <NavLink to="/teachers/english">English Teachers</NavLink>
                    <NavLink to="/teachers/chinese">Chinese Teachers</NavLink>
                    <NavLink to="/teachers/french">French Teachers</NavLink>
                    <NavLink to="/teachers/spanish">Spanish Teachers</NavLink>
                    <NavLink to="/teachers/others">Others Teachers</NavLink>
                </div>

                <div className="footer-container">
                    <h2>Leasons</h2>
                    <NavLink to="/lessons/english">Learn English</NavLink>
                    <NavLink to="/lessons/chinese">Learn Chinese</NavLink>
                    <NavLink to="/lessons/french">Learn French</NavLink>
                    <NavLink to="/lessons/spanish">Learn Spanish</NavLink>
                    <NavLink to="/lessons/others">Learn Others</NavLink>
                </div>

                    <div className="footer-container">
                    <h2>Company</h2>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/how-it-works">How it Works</NavLink>
                    <NavLink to="/terms">Terms</NavLink>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                </div>

                <div className="footer-container">
                    <h2>More</h2>
                    <NavLink to="/documentation">Documentation</NavLink>
                    <NavLink to="/licence">Licence</NavLink>
                </div>

            </footer>
            <p className="copyright">&copy; 2024 HaiDoc. All rights reserved.</p>
        </>

    );
}