import React from 'react';
import {Link, NavLink} from "react-router-dom";
import {Navbar, Row, Col} from "react-materialize";
import wordmark from '../assets/wordmark.png';

const Wordmark = () => (
    <div className="brand-logo">
        <Link to="/"><img src={wordmark} alt="Velocity" height="48px" /></Link>
    </div>
);

const FooterWordmark = () => (
    <div className="">
        <Link to="/"><img src={wordmark} alt="Velocity" height="48px" /></Link>
    </div>
);

const FooterLink = ({ href, children }) => {
    if (href.startsWith("/")) {
        return <Link to={href} className="white-text">{children}</Link>
    }
    return <a href={href} className="white-text">{children}</a>
}

export default ({ children }) => (
    <div className="BaseLayout">
        <Navbar fixed brand={<Wordmark />} alignLinks="right" className="grey darken-4">
            <NavLink to="/downloads">Download</NavLink>
            <a href="https://docs.velocitypowered.com">Documentation</a>
            <NavLink to="/community">Community</NavLink>
            <a href="https://forums.velocitypowered.com">Forums</a>
        </Navbar>
    
        {children}

        <footer className="page-footer grey darken-4 white-text">
            <div className="container">
                <Row>
                    <FooterWordmark />

                    <Col l={4} s={12}>
                        <h5>Project</h5>
                        <ul>
                            <li>About</li>
                            <li><FooterLink href="https://docs.velocitypowered.com">Documentation</FooterLink></li>
                            <li><FooterLink href="/downloads">Download</FooterLink></li>
                        </ul>
                    </Col>
                    <Col l={4} s={12}>
                        <h5>Community</h5>
                        <ul>
                            <li><FooterLink href="https://forums.velocitypowered.com">Forums</FooterLink></li>
                            <li>Discord</li>
                            <li><FooterLink href="https://github.com/VelocityPowered">GitHub</FooterLink></li>
                        </ul>
                    </Col>
                    <Col l={4} s={12}>
                        <h5>Developers</h5>
                        <ul>
                            <li>Plugin Releases</li>
                            <li><FooterLink href="https://jd.velocitypowered.com">Javadoc</FooterLink></li>
                            <li>Maven Repository</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="footer-copyright">
                <div className="container">
                    &copy; 2019 Velocity Project

                    <a className="grey-text text-lighten-4 right" href="https://github.com/VelocityPowered/Matter">Fork this website</a>
                </div>
            </div>
        </footer>
    </div>
);