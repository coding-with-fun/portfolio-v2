import React from "react";
import { MapContainer } from "./ContactMe/MapContainer";
import SocialIcons from "./ContactMe/SocialIcons";

const ContactMe = () => {
    return (
        <div className="contact_me__container" id="contact-me">
            <div className="contact_me__header">
                <div className="header">Get In Touch</div>
            </div>

            <div className="info__container container">
                <SocialIcons />

                <div className="map__container">
                    <MapContainer />
                </div>
            </div>
        </div>
    );
};

export default ContactMe;
