import React from "react";

import ReactDOM from "react-dom";
import "./index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBank,
    faPhone,
    faEnvelope,
    faHeart,
    faTeletype,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

library.add(faBank, faPhone, faEnvelope, faHeart, faTeletype);

function App() {
    return (
        <div>
            <ProfileCard />
        </div>
    );
}

function ProfileCard() {
    return (
        <div className="card">
            <div className="top">
                <Header />
                <Identity />
            </div>
            <div className="bottom">
                <Biodata />
                <HighLight />
            </div>
        </div>
    );
}

function Header() {
    return (
        <>
            <div className="social-buttons">
                <SocialButtons icon="bank" />
                <SocialButtons icon="phone" />
            </div>
            <div className="social-buttons right">
                <SocialButtons icon="envelope" />
            </div>
        </>
    );
}

function SocialButtons({ icon }) {
    return (
        <>
            <button>
                <i>
                    <FontAwesomeIcon icon={{ prefix: "fa", iconName: icon }} />
                </i>
            </button>
        </>
    );
}

function Identity() {
    return (
        <>
            <div className="text">
                <div className="name-wrapper">Marhaensa</div>
                <div className="title">Fullstack Developer</div>
            </div>
            <button className="like">
                <i>
                    <FontAwesomeIcon icon={faHeart} />
                </i>
            </button>
        </>
    );
}

function Biodata() {
    return (
        <>
            <div className="desc">
                My name is <b>Marhaensa</b> I am a Fullstack Developer with 5
                years of experience. I have worked on a variety of projects,
                from small websites to large-scale web applications. I am
                proficient in a variety of technologies, including JavaScript,
                React, Node.js, and MongoDB. I am a highly motivated and
                results-oriented individual with a strong work ethic. I am also
                a team player and I enjoy working with others.
            </div>
        </>
    );
}

function HighLight() {
    return (
        <>
            <div className="buttons">
                <Badge text="CV" />
                <Badge text="pHd" />
            </div>
        </>
    );
}

function Badge({ text }) {
    return (
        <>
            <button>
                <div className="height">
                    <span>{text}</span>
                </div>
            </button>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <React.StrictMode> for developing, show error message
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
